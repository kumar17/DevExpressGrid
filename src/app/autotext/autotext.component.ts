import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AutoService } from '../services/autocompete.service';
import data from 'devextreme/data/odata/store';
import DevExpress from 'devextreme';
import { DxAutocompleteModule, IterableDifferHelper } from 'devextreme-angular';
import * as $ from 'jquery'
import { ProductService } from '../services/Product.service';

@Component({
    selector: 'app-autotext',
    templateUrl: './autotext.component.html',
    styleUrls: ['./autotext.component.css']
})
export class AutotextComponent implements OnInit, AfterViewInit {
    @ViewChild('statedata') autotextInput: DxAutocompleteModule;
    names: string[];
    surnames: string[];
    positions: string[];
    cities: string[];
    states: any;
    firstName = "";
    lastName = "";
    position: string;
    city = "";
    state = "";
    fullInfo = "";
    result: any;
    filterText: any;
    dataSourceText: any;
    fields: Array<any>;
    customOperations: Array<any>;
    filter: any;
    categories: string[];
    groupOperations: string[] = ["and", "or"];

    userData: any[] = [];
    usertext: string = "";


    lastkeydown1: number = 0;
    subscription: any;
    userList1: any = [];
    showhide: Boolean = false;


    anyOfOperation = {
        name: "anyof",
        caption: "Is any of",
        icon: "check",
        editorTemplate: "tagBoxTemplate",
        calculateFilterExpression(filterValue: any, field: any) {
            return filterValue && filterValue.length
                && Array.prototype.concat.apply([], filterValue.map(function (value) {
                    return [[field.dataField, "=", value], "or"];
                })).slice(0, -1);
        }
    };

    constructor(service: AutoService, productService: ProductService) {
        this.states = new data({
            url: "https://js.devexpress.com/Demos/DevAV/odata/States?$select=Sate_ID,State_Long,State_Short",
            key: "Sate_ID",
            keyType: "Int32"
        });
        this.names = service.getNames();
        this.surnames = service.getSurnames();
        this.positions = service.getPositions();
        this.cities = service.getCities();
        this.position = this.positions[0];

        this.fields = productService.getFields();
        this.filter = productService.getFilter();
        this.categories = productService.getCategories();
        this.customOperations = [this.anyOfOperation];
    }



    ngOnInit(): void {
        $('button').click(function () {
            alert('GeeksForGeeks');
        });


        this.userData = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Joseph",
            "Thomas", "Christopher", "Daniel", "Paul", "Mark", "Donald", "George", "Kenneth", "Steven",
            "Edward", "Brian", "Ronald", "Anthony", "Kevin", "Jason", "Jeff", "Mary", "Patricia", "Linda", "Barbara", "Elizabeth", "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", "Lisa", "Nancy", "Karen", "Betty", "Helen",
            "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Michelle", "Laura", "Sarah", "Kimberly"]
    }



    getUserIdsFirstWay($event) {
        let userId = (<HTMLInputElement>document.getElementById('userIdFirstWay')).value;
        this.userList1 = [];

        // if (userId.length > 1) {
        //if ($event.timeStamp - this.lastkeydown1 > 200) {
        this.userList1 = this.searchFromArray(this.userData, userId.toLocaleLowerCase());
        this.showhide = true;
        // }
        //}
    }

    searchFromArray(arr, regex) {
        let matches = [], i;
        for (i = 0; i < arr.length; i++) {
            if (arr[i].toLocaleLowerCase().match(regex)) {
                matches.push(arr[i]);
            }
        }
        return matches;
    };

    selectrecord(item: any) {
        this.usertext = item;
        this.showhide = false;
    }




    updateEmployeeInfo() {
        var result = "";
        result += ((this.firstName || "") + " " + (this.lastName || "")).trim();
        result += (result && this.position) ? (", " + this.position) : this.position;
        result += (result && this.city) ? (", " + this.city) : this.city;
        result += (result && this.state) ? (", " + this.state) : this.state;
        this.fullInfo = result;
    }

    ngAfterViewInit() {
        // setTimeout(() => {
        //     let result: any = this.autotextInput;
        //     result.innerHTML = "<input type='text' value=''>"

        // }, 200);
    }

    updateTexts(e) {
        this.filterText = AutotextComponent.formatValue(e.component.option("value"));
        this.dataSourceText = AutotextComponent.formatValue(e.component.getFilterExpression());
    }

    private static formatValue(value, spaces = 0) {
        if (value && Array.isArray(value[0])) {
            var TAB_SIZE = 4;
            spaces = spaces || TAB_SIZE;
            return "[" + AutotextComponent.getLineBreak(spaces) + value.map(function (item) {
                return Array.isArray(item[0]) ? AutotextComponent.formatValue(item, spaces + TAB_SIZE) : JSON.stringify(item);
            }).join("," + AutotextComponent.getLineBreak(spaces)) + AutotextComponent.getLineBreak(spaces - TAB_SIZE) + "]";
        }
        return JSON.stringify(value);
    }

    private static getLineBreak(spaces) {
        return "\r\n" + new Array(spaces + 1).join(" ");
    }


}
