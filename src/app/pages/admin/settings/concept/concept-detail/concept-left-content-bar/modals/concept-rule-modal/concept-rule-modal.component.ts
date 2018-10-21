import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {RekrutiApiService} from '../../../../../../../../services/api/api.service';
import {NotificationsService} from '../../../../../../../../services/notifications/notifications.service';
import {GlobalVariablesService} from '../../../../../../../../services/global-variables/global-variables.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-concept-rule-modal',
  templateUrl: './concept-rule-modal.component.html',
  styleUrls: ['./concept-rule-modal.component.css']
})
export class ConceptRuleModalComponent implements OnInit {

  modalTitle: any;
  itemData: any;
  listScope: any;
  conceptId: any = +this.route.snapshot.paramMap.get('id');
  @ViewChild('btn_cancel') btnCancel;
  forAdd: any;

  constructor(private api: RekrutiApiService,
              private notifications: NotificationsService, 
              private cdRef:ChangeDetectorRef, 
              private globalVar: GlobalVariablesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.globalVar.openConceptRuleModalEvent.subscribe((data: any) => {
      this.forAdd = data.forAdd;
      if (data.forAdd) {
        this.modalTitle = 'Add Rule';
        this.itemData = {
          id: this.conceptId,
          name: '',
          roles: [],
          isAntonym: false,
          forAdd: true
        };
      } else {
        this.modalTitle = 'Edit Rule';
        this.itemData = {
            id: data.itemData.id,
            name: data.itemData.name,
            isAntonym: data.itemData.isAntonym,
            roles: [],
            forAdd: false
        };
        var roles = [];
        data.itemData.conceptSqScopeJoints.forEach(function(val){
          roles.push(val.conceptSqScopeId);
        });
        this.itemData.roles = roles;
      }

    });
    this.get_listScope();
  }

  get_listScope(){
    this.api.get_listScope().then(
      response => {
        if(response.result > 0){
          this.listScope = response.data;
        }
      },
      err => {
        console.log('err:', err);
      });
  }

  saveRuleForConcept(data){
    this.api.saveRuleForConcept(data).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Saved successfully!', 1000);
          this.btnCancel.nativeElement.click();
          window.location.reload();
        } else {
          this.notifications.warning('Can not save', 1000);
        }
      },
      err => {
        console.log('err:', err);
      });
  }

  deleteRuleForConcept(data){
    this.api.deleteRuleForConcept(data).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Deleted successfully', 1000);
          this.btnCancel.nativeElement.click();
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
