import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username ='Praveen';
  password = '1234';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router:Router) {
    // Initialization code can go here if needed
  }
  handleLogin(){
    // console.log(this.username, this.password);
    if(this.username==="Praveen" && this.password==="1234"){
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
    }
  }
}
