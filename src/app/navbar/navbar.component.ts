import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit() {
    this.authService.authStatus.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.isLoggedIn = false;
    });
  }

  // logout() {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/']);
  // }
}
