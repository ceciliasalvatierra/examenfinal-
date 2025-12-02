import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Refrigerador } from '../../models/refrigeradores/refrigerador';
import { RefrigeradorService } from '../../service/refrigeradorservice/refrigerador.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-refrigeradores-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,],
  templateUrl: './refrigeradores-list.html',
  styleUrls: ['./refrigeradores-list.css'], 
})
export class RefrigeradoresListComponent implements OnInit {

  refrigeradores: (Refrigerador & { imagenUrl?: string })[] = []; 

  constructor(
    private refrigeradorService: RefrigeradorService,
    private cd: ChangeDetectorRef,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.listarRefrigeradores();
  }

  listarRefrigeradores(): void {
    this.refrigeradorService.getRefrigeradoresList().subscribe(
      data => {
        // Asignar imagen a cada refrigerador
        this.refrigeradores = data.map(r => ({
          ...r,
          imagenUrl: r.id != null ? this.getImagenPorId(r.id) : '/assets/default-refrigerador.jpg'
        }));
        console.log(this.refrigeradores);
      },
      error => console.error(error)
    );
  }

  editarRefrigerador(id: number | null) {
  if (id != null) {
    this.router.navigate(['/refrigeradores/editar', id]);
  }
  }

  deleteRefrigerador(id: number | null) {
    if (id == null) {
      console.error('ID inválido');
      return;
    }

    if (confirm('¿Seguro que quieres eliminar este refrigerador?')) {
      this.refrigeradorService.deleteRefrigeradorById(id).subscribe({
        next: () => {
          console.log('Refrigerador eliminado');
          this.listarRefrigeradores(); 
        },
        error: (e) => console.error(e)
      });
    }
  }

  getImagenPorId(id: number): string {
    switch (id) {
      case 1: return '/assets/blackfridge.webp';
      case 2: return '/assets/silverfridge.webp';
      case 4: return '/assets/blackLG.webp';
      case 5: return '/assets/acerofridge.webp';
      default: return '/assets/default-refrigerador.jpg';
    }
  }
}
