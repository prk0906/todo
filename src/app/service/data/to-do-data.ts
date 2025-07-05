import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListTodoscomponent, Todo } from '../../list-todoscomponent/list-todoscomponent';

@Injectable({
  providedIn: 'root'
})
export class ToDoData {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
  deleteTodo(username:string,id:number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  retrieveTodo(username:string,id:number){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}
