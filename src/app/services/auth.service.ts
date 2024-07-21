import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
// import { error } from 'jquery';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private loggedIn = new BehaviorSubject<boolean>(false);

  authStatus = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router:Router) { }

  login(credentials: {username: string, password: string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials,{
        headers: { 'Content-Type': 'application/json' }}).pipe(
      tap(response => {
        this.loggedIn.next(true); 
        console.log("Login Successful.");
        window.alert("Login Successful");
      }),
  );
}

  register(user: {username: string, password: string}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user).pipe(
      tap((response: any) => {
        console.log('Registration successful');
        alert('Registration successful');
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      tap(response => {
        this.loggedIn.next(false);
        console.log('Logout successful');
        alert('Logout successful');
        window.location.reload();
      })
    );
  }
 

  isLoggedIn(): boolean {
    return this.loggedIn.getValue();
    // return !!localStorage.getItem('token');
  }
}
