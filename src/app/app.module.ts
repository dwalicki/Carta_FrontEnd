import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

/* Services */
import { InvestmentServiceService } from './services/investment-service.service';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    InvestmentServiceService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
