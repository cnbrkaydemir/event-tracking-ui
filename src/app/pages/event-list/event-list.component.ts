import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Events } from 'src/app/model/events.model';
import { Users } from 'src/app/model/users.model';
import { DashboardService } from 'src/app/services/dashboard.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
public model:Events[];

public user:Users;

  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    this.getEventList();
  }

  async getEventList(){
    this.user=JSON.parse(<string>sessionStorage.getItem('userdetails'));

    
   await  this.dashboardService.displayEvents(this.user.userEmail).subscribe(
      responseData=>{
        console.log(responseData);
        
        this.model=<any>responseData.body;
        
    },
    err=>{
      console.log(err);
    });
  }
  }


  


