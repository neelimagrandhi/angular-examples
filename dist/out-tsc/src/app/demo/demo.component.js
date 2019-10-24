import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DemoComponent = class DemoComponent {
    constructor() {
        this.title = "angular 6 ";
        this.name = ",";
        this.textcolor = "blue";
        this.price = 0;
    }
    m1(sample) {
        this.msg = sample;
    }
    m2() {
        this.msg = "";
    }
    ngOnInit() {
    }
};
DemoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './demo.component.html',
        styleUrls: ['./demo.component.css']
    })
], DemoComponent);
export { DemoComponent };
//# sourceMappingURL=demo.component.js.map