import { CadastroClienteService } from './cadastro-cliente.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class CadastroClienteComponent {
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cadastroClienteService: CadastroClienteService,
    private router: Router
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const user = {
        id: 0,
        nome: this.cadastroForm.value.nome,
        email: this.cadastroForm.value.email,
        senha: this.cadastroForm.value.senha
      };
      this.cadastroClienteService.cadastrarCliente(user).subscribe({
        next: () => this.router.navigate(['/login']),
        error: err => alert(err.error)
      });
    }
  }
}
