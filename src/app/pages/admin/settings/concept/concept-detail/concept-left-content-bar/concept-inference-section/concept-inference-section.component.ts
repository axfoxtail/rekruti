import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {RekrutiApiService} from '../../../../../../../services/api/api.service';
import {NotificationsService} from '../../../../../../../services/notifications/notifications.service';
import {GlobalVariablesService} from '../../../../../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-concept-inference-section',
  templateUrl: './concept-inference-section.component.html',
  styleUrls: ['./concept-inference-section.component.css']
})
export class ConceptInferenceSectionComponent implements OnInit {

  @Input() inferenceData;

  constructor(private api: RekrutiApiService,
              private notifications: NotificationsService, 
              private cdRef:ChangeDetectorRef, 
              private globalVar: GlobalVariablesService) { }

  ngOnInit() {
  }

  openAddInferenceForConcept(){

  }

  deleteInferenceForConcept(id){
    this.api.deleteInferenceForConcept(id).then(
      response => {
        if (response.result > 0) {
          this.notifications.success('Deleted successfully', 1000);
          window.location.reload();
        } else {
          this.notifications.warning('Can not delete', 1000);
        }
      },
      err => {
        console.log('err:', err);
      });
  }
}
