import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devexpressauto',
  templateUrl: './devexpressauto.component.html',
  styleUrls: ['./devexpressauto.component.css']
})
export class DevexpressautoComponent implements OnInit {
  autocompleteData: any;
  constructor() { }

  ngOnInit(): void {
    this.autocompleteData = [
      { country: "Afghanistan", capital: "Kabul" },
      { country: "Albania", capital: "Tirana" },
    ]
  }

}
