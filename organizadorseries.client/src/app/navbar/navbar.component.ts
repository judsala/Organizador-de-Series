import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {  }


  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('userId');
  }

}
