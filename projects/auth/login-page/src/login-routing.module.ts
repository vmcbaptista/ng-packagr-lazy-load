import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}];

// When building in Prod, for some reason it is necessary to declare and export this variable because you cannot call functions inside decorators
// Although if you enable Ivy in production build you can call it directly in decorator
export const routerModule = RouterModule.forChild(routes)

@NgModule({
  imports: [routerModule],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
