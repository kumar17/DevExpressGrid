import { Component, OnInit } from '@angular/core';
import { Employee, Service } from '../services/employees.service';


@Component({
  selector: 'app-rowpoc',
  templateUrl: './rowpoc.component.html',
  styleUrls: ['./rowpoc.component.css']
})
export class RowpocComponent implements OnInit {

  employees: Employee[];


  //   const columns =  [{
  //     dataField: 'id',
  //     caption: 'Id',
  //     width: 100,
  //     dataType: number 
  // }, {
  //     dataField: 'Name',
  //     caption: 'Name',
  //     width: 500,
  //     dataType: string
  // }];


  constructor(private service: Service) {

    this.employees = service.getEmployees();
  }

  ngOnInit(): void {
  }

}
