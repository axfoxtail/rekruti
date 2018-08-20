import { Component, OnInit } from '@angular/core';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-employers-sidebar',
  templateUrl: './employers-sidebar.component.html',
  styleUrls: ['./employers-sidebar.component.css']
})
export class EmployersSidebarComponent implements OnInit {
    
    filtersList:any;
    employersData:any;

    constructor(private globalVar:GlobalVariablesService) { }

    ngOnInit() {
        this.globalVar.employersListEvent.subscribe((list:any) => {
            this.employersData = list;
            this.filtersList = list.data.aggregations;
            console.log(this.filtersList);
        });
    }

}
