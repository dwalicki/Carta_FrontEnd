import { Component, OnInit } from '@angular/core';

import { InvestmentServiceService } from '../../services/investment-service.service'

import { Investment } from '../../models/investment';

import { MatDatepickerInputEvent } from '@angular/material'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  private totalCost: number;
  private allExpandState: boolean = true;
  private picker: any;
  private investmentDate: string;
  private pageTitle: string = "Schedule";
  private investments: Investment[];

  constructor(
    private _investmentService: InvestmentServiceService) { }

  ngOnInit() { 
    let now = new Date();
    this.investmentDate = now.toString();

    this._investmentService.getInvestments(null)
      .subscribe((investments: Investment[]) => {
        this.investments = investments;
        this.totalCost = this.retrieveTotal();
      },
      error => {
        console.log("Error: " + <any>error);
      });
  }
  retrieveTotal(){
    var totalCost = 0;

    for(var i = 0;i<this.investments.length;i++){
      totalCost += this.investments[i].cost["$"];
    }
    return totalCost;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.investmentDate = event.value.toString();

    this._investmentService.getInvestments(event.value)
      .subscribe((investments: Investment[]) => {
        this.investments = investments;
      },
      error => {
        console.log("Error: " + <any>error);
      });
  }
}
