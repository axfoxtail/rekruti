import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {PaginationInstance} from 'ngx-pagination';
import { ActivatedRoute } from '@angular/router';

import {GlobalVariablesService} from '../../../../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../../../../services/api/api.service';
import {NotificationsService} from '../../../../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-concept-inference-modal',
  templateUrl: './concept-inference-modal.component.html',
  styleUrls: ['./concept-inference-modal.component.css']
})
export class ConceptInferenceModalComponent implements OnInit {

  searchSettingsForm : FormGroup
  searchKeyword : any = '';
  itemData : any;
  conceptId : any = +this.route.snapshot.paramMap.get('id');
  arr_inference : any = [];
  @ViewChild('btn_cancel') btnCancel;

  // ------ pagination config ------ //
  public maxSize: any = 8;
  public directionLinks: any = true;
  public autoHide: any = false;
  public responsive: any = false;
  public config: PaginationInstance = {
      id: 'server',
      itemsPerPage: 20,
      currentPage: 1
  };
  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page'
  };
  // ------ ./pagination config ------ //

  constructor(private formBuilder: FormBuilder, 
              private notifications: NotificationsService, 
              private globalVar: GlobalVariablesService, 
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchSettingsForm = this.formBuilder.group({
        searchKeyword: ['', Validators.required]
    });
  }

  submitSearch(keyword){
    this.spinner.show();
    this.api.searchConceptInference(keyword).then(
      response => {
        this.spinner.hide();
        if (response.result > 0) {
          this.itemData = response.data;
        }
      },
      err => {
        this.spinner.hide();
        console.log('err:', err);
      });
  }

  clickCheckbox(event, data){
    if (event.target.checked) {
      this.arr_inference.push(data.id);
    } else {
      for(var i = 0; i < this.arr_inference.length; i++){
        if (this.arr_inference[i] == data.id) {
          this.arr_inference.splice(i, 1);
        }
      }
    }
  }

  saveInferenceForConcept(){
    var k = 0;
    for (var i = 0; i < this.arr_inference.length; i++) {
      this.api.saveInferenceForConcept({conceptId: this.conceptId, inferenceId: this.arr_inference[i]}).then(
        response => {
            k++;
          if (response.result > 0) {
            if (k == this.arr_inference.length) {
              this.notifications.success('Saved successfully!', 1000);
              this.btnCancel.nativeElement.click();
              window.location.reload();
            }
          }
        },
        err => {
          console.log('err:', err);
        });
    }
  }


}
