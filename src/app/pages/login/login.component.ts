import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/users.model';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  authStatus: string;
  model = new Users();

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    
  }
  ngOnDestroy() {
  }

  validateUser(loginForm: NgForm) {
    
    this.loginService.validateLoginDetails(this.model).subscribe(
      responseData => {
        
        window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization'));
        this.model = <any> responseData.body;
        this.model.authStatus = 'AUTH';
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
      
        
        this.router.navigate(['dashboard']);
        loginForm.resetForm();
      }, error => {
        console.log(error);
      });

  }

  getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    return cookie[name];
  }

}
