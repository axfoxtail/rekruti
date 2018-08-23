import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-employers-search-bar',
  templateUrl: './employers-search-bar.component.html',
  styleUrls: ['./employers-search-bar.component.css']
})
export class EmployersSearchBarComponent implements OnInit {
    
    @ViewChild('searchField_') searchField: ElementRef;
    
    _autoCollapseWidth:any = 1100;
    windowWidth:any = window.innerWidth;
    
    searchEmployersForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private globalVar:GlobalVariablesService) { }

    ngOnInit() {
        this.searchEmployersForm = this.formBuilder.group({
            searchRequest: ['', Validators.required]
        });
        this.globalVar.employersWindowWidthChangedEvent.subscribe((width:any) => {
            this.windowWidth = width;
        });
    }
    
    _toggleSidebar() {
        this.globalVar.employersSidebarStateChanged();
    }
    
    submitSearch() {
        if(this.searchEmployersForm.valid) {
            var currentOption = this.globalVar.getEmployersRequestBody();
            this.globalVar.setEmployersRequestBody(this.searchEmployersForm.value.searchRequest, 0, currentOption.sort);
            this.globalVar.employersListChanged();
            
            this.searchEmployersForm.patchValue({
                searchRequest: ''
            });
            this.searchField.nativeElement.blur();
        }
    }

}
