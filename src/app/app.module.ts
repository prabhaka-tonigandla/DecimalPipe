import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DecimalPipe } from '@angular/common/src/pipes';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [
    { provide: LOCALE_ID, useValue: "en-ES" }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
