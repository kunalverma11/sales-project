import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.scss']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson ('John', 'Doe', 'john.doe@mail.com', 50000),
    new SalesPerson('Claire', 'Murphy', 'claire.murphy@mail.com', 40000),
    new SalesPerson('Mai', 'Truong', 'mai.truong@mail.com', 100000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
