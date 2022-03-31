import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent {
  posts: any

  constructor(private http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response =>{
      this.posts = response;
    })
   }
 
  
}
