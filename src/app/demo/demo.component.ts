import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  title="angular 6 ";

  name:string=",";

  msg:string;
  textcolor:string="blue";
  m1(sample:string){
    this.msg=sample;
  }
  m2(){
    this.msg="";
  }
  
price:number=0;

  constructor() { }

  ngOnInit() {
    

  }

}
