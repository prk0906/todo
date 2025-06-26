import { Component } from '@angular/core';

@Component({
  selector: 'app-errorcomponent',
  imports: [],
  templateUrl: './errorcomponent.html',
  styleUrl: './errorcomponent.css'
})
export class Errorcomponent {
  errorMessage = 'Something went wrong! Please try again later.';
}
