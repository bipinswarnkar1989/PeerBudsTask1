import { Component } from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent {

private name: string;
private userData: any[] = [];
private relatedUsers: any[] = [];

// Link to our api, pointing to localhost
API = '';

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private http: Http
  ) {}

ngOnInit() {
  this.route.params.forEach((params: Params) => {
      this.name = params['name'];
      this.viewUser(this.name);
  });
  }

  //Get one agreement from the api
  viewUser(name){
       this.http.get(`${this.API}/users/${name}`)
         .map(res => res.json())
         .subscribe(u => {

               this.userData = u.user;
               this.relatedUsers = u.users;
               console.log('UserData: '+ JSON.stringify(this.userData));


         })

  }

  CreateUserName(u){
      return u.replace(/ /g, "-");
  }



}
