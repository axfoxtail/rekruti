import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {RekrutiApiService} from '../../../../../../services/api/api.service';
import {NotificationsService} from '../../../../../../services/notifications/notifications.service';
import {GlobalVariablesService} from '../../../../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-concept-left-content-bar',
  templateUrl: './concept-left-content-bar.component.html',
  styleUrls: ['./concept-left-content-bar.component.css']
})
export class ConceptLeftContentBarComponent implements OnInit {

  @Input() type = 'people';
  @Input() itemData;
  @Input() chosenTab;
  @Input() fromFull;

  @ViewChild('tab') ngbTabSet;
  selectedTabStatus = [false, false, false, false, false];

  constructor(private api: RekrutiApiService,
              private notifications: NotificationsService, 
              private cdRef:ChangeDetectorRef, 
              private globalVar: GlobalVariablesService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.chosenTab != null && this.chosenTab !== "") {
        
      switch (this.chosenTab) {
        case "accounts":
            this.ngbTabSet.select('tab1');
            break;
        case "business":
            // this.loadJobNotes(this.itemData.id);
            this.ngbTabSet.select('tab3');
            break;
        case "templates":
            // this.loadJobReqs(this.itemData.id);
            this.ngbTabSet.select('tab2');
            break;
        default:
            this.ngbTabSet.select('tab0');
            break;
      }

      this.cdRef.detectChanges();
    }
  }

  setTab(event) {
    switch (event.nextId) {
      case "tab2":
        //this.loadJobReqs(this.itemData.id);
        break;
      case "tab3" : 
        // this.loadJobNotes(this.itemData.id);
        break;
      case "tab4" :
        // this.loadDocument(this.itemData.id);
          break;
      default:
        // code...
        break;
    }
  }

  openConceptModal(data) {
    this.globalVar.showConceptModal(data);
  }

}
