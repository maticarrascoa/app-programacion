import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = ''; // Declare the username property

  constructor(private router: Router) { } // Inject the Router service

  ngOnInit() {
    // You can initialize the username property here
    this.username = ''; // Example value
  }

  goToLogin() {
    this.router.navigate(['/login']); // Navigate to the login page
  }
}

