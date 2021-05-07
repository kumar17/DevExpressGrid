import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { EmployeeTest, EmployeeTestService } from '../services/EmployeeTest.service';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  employees: EmployeeTest[];
  drivers = [
    { driverID: 1, firstName: "John", lastName: "Smith", busID: 2 },
    { driverID: 2, firstName: "Lizzy", lastName: "Cook", busID: 1 },
    { driverID: 3, firstName: "Brian", lastName: "Hawkins", busID: 3 }
  ];
  buses = [
    { busID: 1, plates: "123456" },
    { busID: 2, plates: "AB-1234" },
    { busID: 3, plates: "CD-9876" }
  ];

  constructor(service: EmployeeTestService) {
    this.employees = service.getEmployees();
  }
  ngOnInit(): void {
  }

  onValueChanged(e, d) {
    this.dataGrid.instance.selectRows([d.key], true)
  }

}
