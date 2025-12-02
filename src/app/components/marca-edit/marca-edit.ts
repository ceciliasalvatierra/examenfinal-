import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from '../../service/marca.service';
import { Marca } from '../../models/marcas/marca';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marca-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './marca-edit.html'
})
export class MarcaEditComponent implements OnInit {

  marca: Marca = {
    id: null,
    nombre: '',
    email: '',
    numeroTelefono: ''
  };

  constructor(
    private service: MarcaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) return;

    this.service.getMarcaById(id).subscribe({
      next: (m) => this.marca = m,
      error: (e) => console.error(e)
    });
  }

  actualizarMarca() {
    if (!this.marca.id) return;

    this.service.updateMarca(this.marca.id, this.marca).subscribe({
      next: () => this.router.navigate(['/marcas']),
      error: (e) => console.error(e)
    });
  }
}
