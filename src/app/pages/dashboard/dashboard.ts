import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { AngularPaginatorModule } from 'angular-paginator';
@Component({
  selector: 'app-dashboard',
  imports: [AngularPaginatorModule,CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

    http = inject(HttpClient);
    userList: any[] = [];
    todoList: any[] = [];
    postList: any[] = [];

    currentPage = 1;
    maxPage = 10;


    ngOnInit(): void {
      this.getUsers();
      this.getTodoItems();
      this.getPosts();
    }

    constructor(){
      
    }
    getUsers(){
     
      this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
      
        this.userList = result;
      })
    }
    getTodoItems(){
        this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((response:any) =>{
        this.todoList =response;
      })
    }

    getPosts(){
        this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((response:any) =>{
        this.postList =response;
      })
    }
    
}
