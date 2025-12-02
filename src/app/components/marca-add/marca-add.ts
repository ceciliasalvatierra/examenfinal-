import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MarcaService } from '../../service/marca.service';
import { Marca } from '../../models/marcas/marca';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marca-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './marca-add.html'
})
export class MarcaAddComponent {

  marca: Marca = {
    id: null,
    nombre: '',
    email: '',
    numeroTelefono: ''
  };

  constructor(
    private service: MarcaService,
    private router: Router
  ) {}

  agregarMarca() {
    this.service.createMarca(this.marca).subscribe({
      next: () => this.router.navigate(['/marcas']),
      error: (e) => console.error(e)
    });
  }
}

