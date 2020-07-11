import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any[];

  constructor(http: Http) {
    http.get('https://jsonplaceholder.typicode.com/comments')
        .subscribe(response => {
          this.comments = response.json();
          //console.log(this.comments);
        })
   }

  ngOnInit() {
  }

}
