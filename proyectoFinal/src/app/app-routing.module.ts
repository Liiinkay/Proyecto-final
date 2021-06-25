import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTicketComponent } from '../app/pages/crear-ticket/crear-ticket.component';
import { MostrarTicketsComponent } from '../app/pages/mostrar-tickets/mostrar-tickets.component';
import { MostrarUsuariosComponent } from './pages/mostrar-usuarios/mostrar-usuarios.component';

const routes: Routes = [
  {path:'',component:CrearTicketComponent},
  {path:'mostrar-ticket',component:MostrarTicketsComponent},
  {path:'mostrar-usuarios',component:MostrarUsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
