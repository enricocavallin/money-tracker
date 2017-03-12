import { Component, OnInit } from '@angular/core';
import { Operation } from "./operation/operation";
import { Income } from "./operation/income";
import { Expense } from "./operation/expense";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    public items: Operation[];

    ngOnInit(): void {
        const items = [
            new Income("Salary"),
            new Expense("Grocery")
        ];
        this.items = items;
    }

}
