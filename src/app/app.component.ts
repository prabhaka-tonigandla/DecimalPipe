import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';
import * as format from './shared/helper.component';
import { DecimalPipe } from '@angular/common/src/pipes';
import { formatNumber } from '@angular/common';
import { LoanData } from './shared/Loandetails';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  item: { price: number }[] = [
  { "price": 123456789 },
  { "price": 5678901234567 },
];
endPB: number;
startPB: string;
constructor(){
 
}
ngOnInit(): void {



}
Save(): void{
  console.log('test');
  //console.log(formatNumber(this.endPB,"en-US", "1.2-2"));
  //this.startPB=formatNumber(this.startPB,"en-US", "1.2-2");
  // console.log(this.endPB);
   //console.log(`two way binding value ${this.startPB}`);
   let obj = new LoanData();
obj.claim=10;
obj.endPB=123.344;
obj.loanNumber=123.788;
// Object.keys(a).forEach(key => formatNumber(Number(key),"en-US", "1.2-2"));
// Object.keys(a).forEach(key =>{
//    console.log(`${Reflect.get(a,key)}`);
// Object.keys(obj).forEach(e => {
//   //console.log(`key=${e}  value=${a[e]}`);
//  // this[a.e]=formatNumber(a[e],"en-US", "1.2-2");

//  Object.keys(obj).forEach(key => {
//   obj[key] = 'redacted';
// });

// });
Object.keys(obj).forEach(key => {
  
  obj[key] =     formatNumber(obj[key],"en-US", "1.2-2");

});
Object.keys(obj).forEach(e => console.log(`key=${e}  value=${obj[e]}`));
// console.log(a.loanNumber);

// const keys = Object.keys(a);
//     const values = keys.map(key => `${key}: ${Reflect.get(a,key)}`)
//     console.log(values)
}
}

