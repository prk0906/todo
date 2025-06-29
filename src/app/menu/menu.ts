import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink
            ,CommonModule
          ],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit{

  // isUserLoggedIn :boolean = false;
  constructor(public harCodedAuthentication : HardcodedAuthentication){}
  ngOnInit(): void {
    // this.isUserLoggedIn=  this.harCodedAuthentication.isLoggedIn();
  }
  
}
