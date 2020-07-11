import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];

  constructor(http: Http) {
    http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe(response => {
          this.users = response.json();
        })
   }

  ngOnInit() {
  }

}
