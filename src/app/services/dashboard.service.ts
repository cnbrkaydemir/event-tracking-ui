import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../constants/constants';
import { Events } from '../model/events.model';
import { Users } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }


  createEvent(event : Events){
    return this.http.post(environment.rooturl + AppConstants.CREATE_EVENT_API_URL,event,{ observe: 'response',withCredentials: true });
  }

  addUser(user : Users,event:Events){
    return this.http.post(environment.rooturl + AppConstants.ADD_USER_API_URL,{user,event},{ observe: 'response',withCredentials: true });
  }

  discardUser(user : Users,event:Events){
    return this.http.post(environment.rooturl + AppConstants.DISCARD_USER_API_URL,{user,event},{ observe: 'response',withCredentials: true });
  }

  displayEvents(email:string){
    return this.http.post(environment.rooturl + AppConstants.DISPLAY_EVENTS_API_URL,email,{ observe: 'response',withCredentials: true });
  }

  displayAllEvents(){
    return this.http.get(environment.rooturl + AppConstants.DISPLAY_ALL_EVENT_API_URL);
  }


 register(user : Users){
    return this.http.post(environment.rooturl + AppConstants.REGISTER_API_URL,user,{ observe: 'response',withCredentials: true });
  }

  displayAllUsers(){
    return this.http.get(environment.rooturl + AppConstants.DISPLAY_ALL_USER_API_URL);
  }

  displayEventUser(id:number){
    return this.http.post(environment.rooturl + AppConstants.DISPLAY_EVENT_USER_API_URL,id,{ observe: 'response',withCredentials: true });
  }


}
