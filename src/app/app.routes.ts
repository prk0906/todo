import { Routes,RouterModule } from '@angular/router';
import { Login } from './login/login';
import { Errorcomponent } from './errorcomponent/errorcomponent';
import { Welcomecomponent } from './welcomecomponent/welcomecomponent';
import { ListTodoscomponent } from './list-todoscomponent/list-todoscomponent';
import { Logout } from './logout/logout';
import { RouteGuard } from './service/route-guard';
import { Todolist } from './todolist/todolist';


export const routes: Routes = [
    {path:'',component:Login},
    {path:'login',component:Login},
    {path:'welcome/:name',component:Welcomecomponent,canActivate:[RouteGuard]}, 
    {path:'todos',component:ListTodoscomponent,canActivate:[RouteGuard]},
    {path:'logout',component:Logout,canActivate:[RouteGuard]},
    {path:'todos/:id',component:Todolist,canActivate:[RouteGuard]},
    {path:'**',component:Errorcomponent} // Catch-all route for errors
];
