import { Component, OnInit } from '@angular/core';
import { RefrigeradorService } from '../service/refrigeradorservice/refrigerador.service';
import { Refrigerador } from '../models/refrigeradores/refrigerador';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  refrigeradores: Refrigerador[] = [];

  constructor(private service: RefrigeradorService) {}

  ngOnInit(): void {
    this.service.getRefrigeradoresList().subscribe({
      next: (r) => this.refrigeradores = r,
      error: (e) => console.error(e)
    });
  }
}
