import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Events } from 'src/app/model/events.model';
import { Users } from 'src/app/model/users.model';
import { DashboardService } from 'src/app/services/dashboard.service';


@Component({
  selector: 'app-event-creator',
  templateUrl: './event-creator.component.html',
  styleUrls: ['./event-creator.component.scss']
})
export class EventCreatorComponent implements OnInit {
public model:Events=new Events();
public adminUser:Users;

  constructor(private dashboardService:DashboardService, private router:Router) { }

  ngOnInit() {
    this.adminUser=JSON.parse(<string>sessionStorage.getItem('userdetails'));
  }

  newEvent(eventForm:NgForm){
    this.model.created_by=this.adminUser;
    this.dashboardService.createEvent(this.model).subscribe(
      responseData=>{
        this.model=<any>responseData.body;
        eventForm.resetForm();
        this.router.navigate(['/event-list']);
    },
    err=>{
      console.log(err);
    });
  }

  }


