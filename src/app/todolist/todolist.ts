import { Component, OnInit } from '@angular/core';
import { ToDoData } from '../service/data/to-do-data';
import { Todo } from '../list-todoscomponent/list-todoscomponent';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist implements OnInit {
  id: number=0;
  todo: Todo= new Todo(this.id, '', true, new Date());
  constructor(
    private service: ToDoData,
    private route: ActivatedRoute
  ) {


  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.retrieveTodo('praveen', this.id).subscribe(data => {
      this.todo = data;
    });
  }

}
