import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login({username: this.username, password: this.password}).subscribe(response => {
      console.log('Login successful', response);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/']);
    },
  );
  }
}
