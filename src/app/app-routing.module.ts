import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoasvindasComponent } from './boasvindas/boasvindas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login',  component: LoginComponent},
  {path: '',  redirectTo:'login', pathMatch: 'full'},
  {path: 'boasvindas', component: BoasvindasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
