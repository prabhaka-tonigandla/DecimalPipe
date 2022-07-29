import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';
import * as format from './shared/helper.component';
import { DecimalPipe } from '@angular/common/src/pipes';
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
constructor(){
    this.item.forEach(element => {
      element.price = format.formatCurrency(element.price);
    });


}
ngOnInit(): void {
this.endPB = "12.7676";
}
}

