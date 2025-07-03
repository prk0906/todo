import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeData } from '../service/data/welcome-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcomecomponent',
  templateUrl: './welcomecomponent.html',
  styleUrl: './welcomecomponent.css',
  imports:[CommonModule]
})
export class Welcomecomponent implements OnInit {

  name = '';
  welcomeMessageFromService :string='';
  constructor(private route : ActivatedRoute,
              private service:WelcomeData
  ) {
    // You can inject ActivatedRoute to access route parameters if needed

    
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']; // Access the 'name' parameter from the route
  }
  getWelcomeMessage()
  {
    // console.log(this.service.executeHelloWorldBeanService().sub);
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccesfulResponse(response),
      error=>this.handlErroResponse(error));

    // console.log("Last message");  
  }

  getWelcomeMessageWithParameter()
  {
    // console.log(this.service.executeHelloWorldBeanService().sub);
    this.service.executeHelloWorldBeanServicePathVariable(this.name).subscribe(
      response=>this.handleSuccesfulResponse(response),
      error=>this.handlErroResponse(error));

    // console.log("Last message");  
  }


  handleSuccesfulResponse(response:any){
    this.welcomeMessageFromService=response.message
    // console.log(response.message);
  }

  handlErroResponse(error:any){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }

}
