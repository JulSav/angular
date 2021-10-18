import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly accessTokenKey = 'access_token';

  authorizationError = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): any {
    return this.http.get('https://pnitfunctions.azurewebsites.net/api/token?userName=' + username + '&password=' + password);
  }

  setToken(username: string, password: string): void {
    const temp = this.login(username, password);
    temp.subscribe(
      (readableToken) => {
        const token = readableToken.access_token;
        localStorage.setItem(this.accessTokenKey, token);
        this.authorizationError = false;
        this.router.navigate(['/orders']);
      }
    );
  }

  getToken(): string {
    return localStorage.getItem(this.accessTokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.accessTokenKey);
    this.router.navigate(['/login']);
  }

  checkForExperation(): boolean {
    const token = this.getToken();
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    console.log(expiry);

    if ((Math.floor((new Date).getTime() / 1000)) >= expiry) {
      return true;
    }
    else {
      return false;
    }
  }

}
