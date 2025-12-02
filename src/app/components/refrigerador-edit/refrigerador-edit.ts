import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefrigeradorService } from '../../service/refrigeradorservice/refrigerador.service';
import { Refrigerador } from '../../models/refrigeradores/refrigerador';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-refrigerador-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './refrigerador-edit.html',
})
export class RefrigeradorEditComponent implements OnInit {

  refrigerador: Refrigerador = {
    id: null,
    modelo: '',
    color: '',
    precio: 0,
    marca: {
      id: null,
      nombre: '',
      email: '',
      numeroTelefono: ''
    }
  };

  // Lista de marcas disponibles
  marcas = [
    { id: 1, nombre: 'LG' },
    { id: 2, nombre: 'Samsung' }
  ];

  constructor(
    private service: RefrigeradorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getRefrigeradorById(id).subscribe({
      next: (r: Refrigerador) => {
        this.refrigerador = r;
      },
      error: (e: any) => console.error(e)
    });
  }

  actualizarRefrigerador() {
    if (!this.refrigerador.id) return;

    this.service.updateRefrigerador(this.refrigerador.id, this.refrigerador).subscribe({
      next: () => {
        console.log('Refrigerador actualizado');
        this.router.navigate(['/refrigeradores']);
      },
      error: (e: any) => console.error(e)
    });
  }
}



