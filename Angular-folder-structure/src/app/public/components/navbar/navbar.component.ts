import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navlink1 = 'Home';
  navlink2 = 'Menu';
  navlink3 = 'About Us';
  navlink4 = 'Services';
  navlink5 = 'Log in'; 
}

