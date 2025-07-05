import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoData } from '../service/data/to-do-data';
import { Router } from '@angular/router';

export class Todo {
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
  todos :Todo[] =[];
  message:string='';
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
    private service : ToDoData,
    private router : Router
  ) {
    // Initialization code can go here if needed
  }

  ngOnInit() {
      this.refershTodos();
  }
  refershTodos(){
    this.service.retrieveAllTodos('Praveen').subscribe(
      response=>{
        console.log(response);
        this.todos = response;
      }
    );
  }
  deleteTodo(id:number){
    this.service.deleteTodo('praveen',id).subscribe(
      response=>{
        console.log(response);
        this.message = `Delete of Todo ${id} Successful`;
        this.refershTodos();
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    );
  }
  updateTodo(id:number){
    console.log(id);
    this.router.navigate(['todos',id]);
  }
}
