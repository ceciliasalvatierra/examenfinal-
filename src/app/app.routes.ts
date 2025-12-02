import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RefrigeradoresListComponent } from './components/refrigeradores-list/refrigeradores-list';
import { RefrigeradorAddComponent } from './components/refrigerador-add/refrigerador-add';
import { RefrigeradorEditComponent } from './components/refrigerador-edit/refrigerador-edit';
import { MarcasListComponent } from './components/marcas-list/marcas-list';
import { MarcaAddComponent } from './components/marca-add/marca-add';
import { MarcaEditComponent } from './components/marca-edit/marca-edit';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'ver-refrigeradores', component: RefrigeradoresListComponent }, 
    {path: 'añadir-refrigerador', component: RefrigeradorAddComponent},
    { path: 'editar-refrigerador/:id', component: RefrigeradorEditComponent },
    { path: 'ver-marcas', component: MarcasListComponent },
    { path: 'añadir-marca', component: MarcaAddComponent },
    { path: 'editar-marca/:id', component: MarcaEditComponent },
    { path: '**', redirectTo: '' } 
];

    