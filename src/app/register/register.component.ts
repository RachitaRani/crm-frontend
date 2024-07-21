import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register({username: this.username, password: this.password}).subscribe(response => {
      console.log('Registration successful', response);
      this.router.navigate(['/login']);
    });
  }

}
