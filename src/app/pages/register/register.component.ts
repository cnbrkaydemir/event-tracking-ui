import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/users.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public model:Users= new Users();;

  constructor(private dashboardService: DashboardService, private router:Router) { }

  ngOnInit() {
    
  }

  createUser(registerForm:NgForm){
    
    
    this.dashboardService.register(this.model).subscribe(
      
      responseData=>{
        console.log(this.model);
        this.model=<any>responseData.body;
        registerForm.resetForm();
        this.router.navigate['login'];
    },
    err=>{
      console.log(err);
    });
  }

  
}
