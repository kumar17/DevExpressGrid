import { Component, OnInit, Input } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { Service, Task } from '../services/employees.service';
import { DxDataGridModule } from "devextreme-angular";


@Component({
  selector: 'detail-grid',
  templateUrl: './detail-grid-component.component.html',
  styleUrls: ['./detail-grid-component.component.css']
})
export class DetailGridComponentComponent implements OnInit {

  @Input() key: number;
  tasksDataSource: DataSource;
  tasks: Task[];
  columns: Columns[];
  keys: any;
  list_items: any;
  selectedRowKeys: any[] = [];
  recursiveSelectionEnabled = false;
  test: any;

  employees: any;

  constructor(private service: Service) {
    this.tasks = service.getTasks();
    this.getdata();

  }
  ngOnInit(): void {
    // this.list_items = [{ name: 'PPE', code: '101' }, { name: 'INV', code: '102' },{ name: 'INV', code: '103' }];
    // this.keys = Object.keys(this.list_items[0]);
    this.test = [
      { FirstName1: 'abc', LastName1: 'hii' },
      { FirstName1: '123', LastName1: 'hello' },
      { FirstName1: '23423423', LastName1: 'hru' }
    ]

    this.employees = [
      { ID: 1, FullName: 'Arun' },
      { ID: 2, FullName: 'soumya' },
      { ID: 3, FullName: 'loooe' },
    ]

  }

  getdata() {
    this.columns = [
      {
        caption: 'PPE', dataType: Boolean, with: 100, calculateCellValue: this.completedValue
      }, {
        caption: 'INV', dataType: Boolean, with: 100, calculateCellValue: this.completedValue
      }, {
        caption: 'PP2', dataType: Boolean, with: 100, calculateCellValue: this.completedValue
      },
    ]
  }
  logMyCommandClick() {
    console.log('My command was clicked');
  }
  setCellValue(newData, value) {
    let column = (<any>this);
    column.defaultSetCellValue(newData, value);
  }
  ngAfterViewInit() {
    this.tasksDataSource = new DataSource({
      store: new ArrayStore({
        data: this.tasks,
        key: "ID"
      }),
      filter: ["EmployeeID", "=", this.key]
    })

    console.log(this.tasksDataSource);
  }


  completedValue(rowData) {
    return rowData.Status == "Completed";
  }

}



export class Columns {
  dataField?: string;
  caption: string;
  with: number;
  dataType: any;
  calculateCellValue: any
}