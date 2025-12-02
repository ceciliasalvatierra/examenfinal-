import { Component, OnInit } from '@angular/core';
import { Marca } from '../../models/marcas/marca';
import { MarcaService } from '../../service/marca.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marcas-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marcas-list.html'
})
export class MarcasListComponent implements OnInit {

  marcas: Marca[] = [];

  constructor(
    private marcaService: MarcaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarMarcas();
  }

  listarMarcas() {
    this.marcaService.getMarcas().subscribe({
      next: (data) => this.marcas = data,
      error: (e) => console.error(e)
    });
  }

  editarMarca(id: number | null) {
    if (id != null) this.router.navigate(['/editar-marca', id]);
  }

  eliminarMarca(id: number | null) {
    if (id != null && confirm('¿Seguro que quieres eliminar esta marca?')) {
      this.marcaService.deleteMarca(id).subscribe({
        next: () => this.listarMarcas(),
        error: (e) => console.error(e)
      });
    }
  }
}
