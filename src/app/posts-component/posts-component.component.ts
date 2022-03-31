import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent {
  posts: any
  url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {
    http.get(this.url).subscribe(response =>{
      this.posts = response;
    })
   }
 
   createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        this.posts.unshift(post);
        console.log(response);
      });
  }

  updatePost(post: any) {
    this.http.patch(`${this.url}/${post.id}`, JSON.stringify({isRead:true}))
    .subscribe(response => {
      console.log(response);
    });
  }
  
}
