import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {SearchService} from '../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-people-search-bar-export-csv-modal',
  templateUrl: './people-search-bar-export-csv-modal.component.html',
  styleUrls: ['./people-search-bar-export-csv-modal.component.css']
})
export class PeopleSearchBarExportCsvModalComponent implements OnInit {

  itemData: any = {
    from: 1,
    size: 200
  };
  @Input() queryJson;
  @ViewChild('btn_cancel') btnCancel;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
  }

  saveExportCsv(data) {
    this.spinner.show();
    if(!this.queryJson) {
      const peopleSearchConditions = this.globalVar.getSearchConditionsPeople();
      const body = this.search.buildQuery(peopleSearchConditions);
      this.queryJson = body;
    }
    let data_body = {
        from: this.itemData.from - 1,
        queryJson: this.queryJson,
        size: this.itemData.size
    };
    this.api.saveExportCsv(data_body).then(
      response => {
        console.log('res:', response);
        var csv = response;
        var exportedFilename = 'file' + '.csv' || 'export.csv';
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        var link = document.createElement("a");
        if (link.download !== undefined) {
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        this.spinner.hide();
        this.btnCancel.nativeElement.click();
      },
      err => {
        var csv = err.error.text;
        var exportedFilename = 'file' + '.csv' || 'export.csv';
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        var link = document.createElement("a");
        if (link.download !== undefined) {
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        console.log('err:', err);
        this.spinner.hide();
        this.btnCancel.nativeElement.click();
      });
  }

}
