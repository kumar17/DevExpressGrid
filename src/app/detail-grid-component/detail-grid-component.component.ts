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
  


  constructor(private service: Service) {
    this.tasks = service.getTasks();
    

  }
  ngOnInit(): void {


  }

  customizeColumns(columns) {
    columns.push({ // Pushes the "Contacts" band column into the "columns" array
      caption: "Contacts",
      isBand: true
    });

    var contactsFields = ["Email", "Mobile_Phone", "Skype"];
    for (var i = 0; i < columns.length - 1; i++) {
      if (contactsFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Contacts",
        columns[i].ownerBand = columns.length - 1; // assigns "Contacts" as the owner band column
    }
  }

  ngAfterViewInit() {
    this.tasksDataSource = new DataSource({
      store: new ArrayStore({
        data: this.tasks,
        key: "ID"
      }),
      filter: ["EmployeeID", "=", this.key]
    })
  }
  completedValue(rowData) {
    return rowData.Status == "Completed";
  }

}
