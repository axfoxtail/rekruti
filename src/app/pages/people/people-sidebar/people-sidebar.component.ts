import { Component, OnInit } from '@angular/core';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-people-sidebar',
  templateUrl: './people-sidebar.component.html',
  styleUrls: ['./people-sidebar.component.css']
})
export class PeopleSidebarComponent implements OnInit {
    
    filtersList:any;
    peopleData:any;

    constructor(private globalVar:GlobalVariablesService) {
        
    }

    ngOnInit() {
        this.globalVar.peopleListEvent.subscribe((list:any) => {
            this.peopleData = list;
            this.filtersList = list.data.aggregations;
            console.log(this.filtersList);
        });
    }

}
