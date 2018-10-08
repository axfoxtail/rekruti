import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-medicare-supplier',
  templateUrl: './medicare-supplier.component.html',
  styleUrls: ['./medicare-supplier.component.css']
})
export class MedicareSupplierComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Medicare Supplier';
  @Input() sourcingData;
  @Input() sourcingJson;

  constructor() {
   }

  ngOnInit() {
  	
  }

  openViewModal(data: any) {
  	this.sourcingJson = data;
  }

}
