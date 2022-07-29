import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';
import * as format from './shared/helper.component';
import { DecimalPipe } from '@angular/common/src/pipes';
import { formatNumber } from '@angular/common';
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
    this.item.forEach(element => {
      element.price = format.formatCurrency(element.price);
    });


}
ngOnInit(): void {
this.endPB = 12.7676;
this.startPB = "45.34534534";
}
Save(): void{
  //console.log('test');
  console.log(formatNumber(this.endPB,"en-US", "1.2-2"));
  // console.log(this.endPB);
  // console.log(this.startPB);
}
}

