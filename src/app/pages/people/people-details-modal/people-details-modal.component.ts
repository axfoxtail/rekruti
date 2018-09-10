import {Component, OnInit, Input} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-people-details-modal',
    templateUrl: './people-details-modal.component.html',
    styleUrls: ['./people-details-modal.component.css']
})
export class PeopleDetailsModalComponent implements OnInit {

	@Input() chosenPeople;
	@Input() chosenTab1;

    constructor() {

    }

    ngOnInit() {

    }

}
