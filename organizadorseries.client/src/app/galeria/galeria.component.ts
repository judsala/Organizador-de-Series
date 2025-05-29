import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GaleriaService } from './galeria.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class GaleriaComponent implements OnInit {
  serieForm: FormGroup;
  series: any[] = [];
  editando: boolean = false;
  serieEditandoId: number | null = null;

  constructor(private fb: FormBuilder, private galeriaService: GaleriaService) {
    this.serieForm = this.fb.group({
      nomeSerie: ['', Validators.required],
      temporadas: ['', Validators.required],
      imagemUrl: ['', [Validators.required]],
      observacoes: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.carregarSeries();
  }

  get userId() {
    return Number(localStorage.getItem('userId'));
  }

  cadastrarSerie() {
    if (this.serieForm.invalid) {
      this.serieForm.markAllAsTouched();
      return;
    }
    const serie = {
      titulo: this.serieForm.value.nomeSerie,
      temporadas: this.serieForm.value.temporadas,
      imagemUrl: this.serieForm.value.imagemUrl,
      observacoes: this.serieForm.value.observacoes,
      userId: this.userId
    };

    this.galeriaService.cadastrarSerie(serie).subscribe({
    next: () => {
      this.carregarSeries();
      this.serieForm.reset();
    },
    error: err => {
      if (err.error && typeof err.error === 'object') {
        alert(JSON.stringify(err.error));
      } else {
        alert(err.error || err.message || 'Erro desconhecido');
      }
    }
  });
  }

  carregarSeries() {
    this.galeriaService.listarSeriesPorUsuario(this.userId).subscribe(series => {
      this.series = series;
    });
  }

  editarSerie(serie: any) {
    this.editando = true;
    this.serieEditandoId = serie.id;
    this.serieForm.patchValue({
      nomeSerie: serie.titulo,
      temporadas: serie.temporadas,
      imagemUrl: serie.imagemUrl,
      observacoes: serie.observacoes
    });
  }

  deletarSerie(id: number) {
    if (confirm('Deseja realmente deletar esta série?')) {
      this.galeriaService.deletarSerie(id).subscribe(() => this.carregarSeries());
    }
  }

  resetarFormulario() {
    this.serieForm.reset();
    this.editando = false;
    this.serieEditandoId = null;
  }
}
