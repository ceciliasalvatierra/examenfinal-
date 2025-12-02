import { Component } from '@angular/core';
import { RefrigeradorService } from '../../service/refrigeradorservice/refrigerador.service';
import { Refrigerador } from '../../models/refrigeradores/refrigerador';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-refrigerador-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './refrigerador-add.html',
})
export class RefrigeradorAddComponent {

  modelo = '';
  color = '';
  precio: number | null = null;
  marcaId: number | null = null;

  constructor(private service: RefrigeradorService) {}

  addRefrigerador() {

    const refrigerador: Refrigerador = {
      id: null,
      modelo: this.modelo,
      color: this.color,
      precio: this.precio!,
      marca: {
        id: this.marcaId,
        nombre: '',
        email: '',
        numeroTelefono: ''
      }
    };

    this.service.createRefrigerador(refrigerador).subscribe({
      next: (r: any) => console.log("Refrigerador creado", r),
      error: (e: any) => console.error(e)
    });
  }
}
