import { Routes,RouterModule } from '@angular/router';
import { Login } from './login/login';
import { Errorcomponent } from './errorcomponent/errorcomponent';
import { Welcomecomponent } from './welcomecomponent/welcomecomponent';
import { ListTodoscomponent } from './list-todoscomponent/list-todoscomponent';

export const routes: Routes = [
    {path:'',component:Login},
    {path:'login',component:Login},
    {path:'welcome/:name',component:Welcomecomponent}, 
    {path:'todos',component:ListTodoscomponent},
    {path:'**',component:Errorcomponent} // Catch-all route for errors
];
