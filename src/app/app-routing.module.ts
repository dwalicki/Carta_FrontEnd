import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './components/schedule/schedule.component'

const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { /*enableTracing: true*/ })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
