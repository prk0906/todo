import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcomecomponent',
  templateUrl: './welcomecomponent.html',
  styleUrl: './welcomecomponent.css'
})
export class Welcomecomponent implements OnInit {

  name = '';
  constructor(private route : ActivatedRoute) {
    // You can inject ActivatedRoute to access route parameters if needed

    
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']; // Access the 'name' parameter from the route
  }

}
