import { Component, Input, OnInit } from '@angular/core';
import { OperationType } from './operation-type.enum';

@Component({
    selector: 'app-operation',
    template: `
        <div class="operation">
            <span></span>
        </div>`
})

export class OperationComponent implements OnInit {

    @Input() type: OperationType;
    @Input() amout: number;
    @Input() description: string;

    constructor() { }

    ngOnInit() {

    }

}
