import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Events } from 'src/app/model/events.model';
import { Users } from 'src/app/model/users.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile-other',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

public model:Users=new Users();
public target:number;

  constructor(private dashboardService:DashboardService,private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => { 
      this.target= Number(params.get('id')); 
  });

  this.dashboardService.getUser(this.target).subscribe(
    responseData=>{
      this.model= <any>responseData.body;
      console.log(this.model);
      
    },
    err=>{
      console.log(err);
    }
  );
   

  }



}


