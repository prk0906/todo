import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListTodoscomponent, Todo } from '../../list-todoscomponent/list-todoscomponent';

@Injectable({
  providedIn: 'root'
})
export class ToDoData {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username:string)
    {
      return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    }
}
