import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  user;
  email: string;
  password: string;

  constructor(public authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.user.subscribe(user => {
      if (user == null) {
        this.router.navigate(['']);
      }
    });
  }

  signup() {
    this.authenticationService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authenticationService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authenticationService.logout();
  }
}
