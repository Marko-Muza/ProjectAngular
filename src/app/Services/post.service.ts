import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  //private url=;

  constructor( http: Http ) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }


}