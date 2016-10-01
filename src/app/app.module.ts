import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent} from './appComponent/app.component';
import {TimeService} from './timeService/time.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [TimeService]
})
export class AppModule { };