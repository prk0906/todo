import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
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
  todos = [
    new Todo(1, 'Learn Angular', false, new Date()),
    new Todo(2, 'Learn React', false, new Date()),
    new Todo(3, 'Learn Vue', false, new Date())
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
];

  constructor() {
    // Initialization code can go here if needed
  }

  ngOnInit() {

  }

}
