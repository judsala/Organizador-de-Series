import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService, User } from './login.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, senha } = this.loginForm.value;
      this.loginService.login(email, senha).subscribe({
        next: (user: User) => {
          localStorage.setItem('userId', user.id.toString());
          this.router.navigate(['/galeria']);
        },
        error: err => alert('Login inválido!')
      });
    }
  }
}
