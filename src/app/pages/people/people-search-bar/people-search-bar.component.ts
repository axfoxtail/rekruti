import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-people-search-bar',
  templateUrl: './people-search-bar.component.html',
  styleUrls: ['./people-search-bar.component.css']
})
export class PeopleSearchBarComponent implements OnInit {
    
    _autoCollapseWidth:any = 1100;
    windowWidth:any = window.innerWidth;
    
    searchPeopleForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private globalVar:GlobalVariablesService) { }

    ngOnInit() {
        this.searchPeopleForm = this.formBuilder.group({
            searchRequest: ['', Validators.required]
        });
        this.globalVar.windowWidthChangedEvent.subscribe((width:any) => {
            this.windowWidth = width;
        });
    }
    
    _toggleSidebar() {
        this.globalVar.sidebarStateChanged();
    }
    
    submitSearch() {
        
    }

}
