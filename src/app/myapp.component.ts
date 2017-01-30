import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


// Import rxjs map operator
import 'rxjs/add/operator/map';

@Component({

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MyAppComponent {
  title = 'app works!';
  public create = false;




  // Link to our api, pointing to localhost
 API = '';

 // Declare empty list of agreements
  users: any[] = [];
  constructor(private http: Http) {}

 // Angular 2 Life Cycle event when component has been initialized
 ngOnInit() {
   this.getAllUsers();

 }

 // Get all agreements from the API
 getAllUsers() {
   this.http.get(`${this.API}/users`)
     .map(res => res.json())
     .subscribe(users => {
       console.log(users)
       this.users = users;
     })
 }

 dateFormat(d){
      return d;
 }

 CreateUserName(u){
     return u.replace(/ /g, "-");
 }




}
