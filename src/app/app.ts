import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { CommonModule } from '@angular/common';
import { ListTodoscomponent } from './list-todoscomponent/list-todoscomponent';
import { Welcomecomponent } from './welcomecomponent/welcomecomponent';
import { Menu } from './menu/menu';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet
            , Login
            ,Welcomecomponent
            ,CommonModule
            ,ListTodoscomponent
            ,Menu
            ,Footer
          ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo';
}
