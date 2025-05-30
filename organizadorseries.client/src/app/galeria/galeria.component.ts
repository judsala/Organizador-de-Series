import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GaleriaService } from './galeria.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent]
})
export class GaleriaComponent implements OnInit {
  serieForm: FormGroup;
  serieEditForm: FormGroup;
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

    this.serieEditForm = this.fb.group({
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
      alert('Série cadastrada com sucesso!');
      this.carregarSeries();
      this.serieForm.reset();

      const modal = document.getElementById('cadastrarModal');
      if (modal) {
        const modalInstance = (window as any).bootstrap.Modal.getInstance(modal) || new (window as any).bootstrap.Modal(modal);
        modalInstance.hide();

      // const backdrop = document.querySelector('.modal-backdrop');
      // if (backdrop) {
      //   backdrop.remove();
      // }
      // document.body.classList.remove('modal-open');
  }

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

  abrirModalEdicao(serie: any) {
  this.serieEditandoId = serie.id;
  this.serieEditForm.patchValue({
    nomeSerie: serie.titulo,
    temporadas: serie.temporadas,
    imagemUrl: serie.imagemUrl,
    observacoes: serie.observacoes
  });

  const modal = document.getElementById('editarModal');
  if (modal) {
    // @ts-ignore
    const modalInstance = bootstrap.Modal.getInstance(modal) || new bootstrap.Modal(modal);
    modalInstance.show();
  }
}

  salvarEdicaoSerie() {
  if (!this.serieEditandoId || this.serieEditForm.invalid) {
    this.serieEditForm.markAllAsTouched();
    return;
  }

  const serieAtualizada = {
    id: this.serieEditandoId,
    titulo: this.serieEditForm.value.nomeSerie,
    temporadas: this.serieEditForm.value.temporadas,
    imagemUrl: this.serieEditForm.value.imagemUrl,
    observacoes: this.serieEditForm.value.observacoes,
    userId: this.userId
  };

  this.galeriaService.editarSerie(this.serieEditandoId, serieAtualizada).subscribe({
    next: () => {
      alert('Série editada com sucesso!');
      this.carregarSeries();
      this.serieEditForm.reset();
      this.serieEditandoId = null;
      this.editando = false;
      // Fecha modal de edição
      const modal = document.getElementById('editarModal');
      if (modal) {
        const modalInstance = (window as any).bootstrap.Modal.getInstance(modal) || new (window as any).bootstrap.Modal(modal);
        modalInstance.hide();
      }
    },
    error: err => {
      alert('Erro ao editar série: ' + (err.error?.message || err.message || err));
    }
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
