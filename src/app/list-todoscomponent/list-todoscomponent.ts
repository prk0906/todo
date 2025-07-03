import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoData } from '../service/data/to-do-data';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todoscomponent',
  imports: [CommonModule],
  templateUrl: './list-todoscomponent.html',
  styleUrl: './list-todoscomponent.css'
})
export class ListTodoscomponent implements OnInit {
  todos :Todo[] =[];
  // [
  //   new Todo(1, 'Learn Angular', false, new Date()),
  //   new Todo(2, 'Learn React', false, new Date()),
  //   new Todo(3, 'Learn Vue', false, new Date())
  //   {
  //   id: 1,
  //   description: 'Learn Angular'
  // },
  // {
  //   id: 2,
  //   description: 'Learn React'
  // },
  // {
  //   id: 3,
  //   description: 'Learn Vue'
  // }
// ];

  constructor(
    private service : ToDoData
  ) {
    // Initialization code can go here if needed
  }

  ngOnInit() {
    this.service.retrieveAllTodos('Praveen').subscribe(
      response=>{
        console.log(response);
        this.todos = response;
      }
    );
  }

}
