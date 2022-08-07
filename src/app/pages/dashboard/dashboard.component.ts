import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Events } from 'src/app/model/events.model';
import { Users } from 'src/app/model/users.model';
import { DashboardService } from 'src/app/services/dashboard.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public user:Users;
  public model:Events[];
  public upcomingMeeting:number=0;
  public PastMeeting:number=0;
  

  constructor(private dashboardService:DashboardService){

  }

  ngOnInit() {
    this.getEventList();

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});

    this.getExpired();
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  async getEventList(){
    this.user=JSON.parse(<string>sessionStorage.getItem('userdetails'));

    
   await  this.dashboardService.displayEvents(this.user.userEmail).subscribe(
      responseData=>{
        console.log(responseData);
        
        this.model=<any>responseData.body;
        
        for(let event=0;this.model.length>event; ++event){
          console.log(this.model[event])
          if(this.model[event].expired===true){
            ++this.PastMeeting;
          }
          else{
            ++this.upcomingMeeting;
          }
        }
        
        
    },
    err=>{
      console.log(err);
    });
  }

  getExpired(){
    
    
  }


}
