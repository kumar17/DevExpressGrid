import { Component, OnInit } from '@angular/core';
import { EditorService } from '../services/editor.service';
import { EditorEmployee, Employee } from '../services/employees.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  employees: EditorEmployee[];
  datamarker: DataMarker[];
  listData: any;
  constructor(service: EditorService) {
    this.employees = service.getEmployees();
  }
  isMultiline: boolean = true;
  showhide: Boolean = false;

  ngOnInit(): void {
    this.listData = [
      { itemProperty: "someValue 12244354" },

    ]

    this.datamarker = [
      { marker: '@', value: 'Kevin Carter' },
      { marker: '$', value: 'Risk' },
      { marker: '#', value: 'John' },
      { marker: '!', value: 'test2' },

    ]
  }

  handlePropertyChange() {

  }

}

class DataMarker {
  marker: any;
  value: string;
}
