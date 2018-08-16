import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    
    _opened: boolean;
    _sidebarMode:string = 'push';
    _autoCollapseWidth:any = 1100;
    windowWidth:any = window.innerWidth;
    
    searchPeopleForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        if(this.windowWidth <= this._autoCollapseWidth) {
            this._opened = false;
        } else this._opened = true;
    }

    ngOnInit() {
        this.searchPeopleForm = this.formBuilder.group({
            searchRequest: ['', Validators.required]
        });
    }
    
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        if(this.windowWidth <= this._autoCollapseWidth) {
            this._opened = false;
        } else this._opened = true;
    }
    
    _toggleSidebar() {
        this._opened = !this._opened;
    }
    
    submitSearch() {
        
    }

}
