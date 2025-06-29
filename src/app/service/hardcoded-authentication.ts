import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthentication {

  constructor() { }
  authenticate(userName:string,password:string){
    // console.log('before '+this.isLoggedIn());
    if(userName==='Praveen' && password==='1234'){
      sessionStorage.setItem('authenticaterUser',userName)
      // console.log('after '+this.isLoggedIn());
      return true;
    }
    return false;
  }

  isLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }
  isLoggedOut(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
