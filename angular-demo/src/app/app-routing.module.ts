import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoHocsinhComponent } from './demo-hocsinh/demo-hocsinh.component';

const routes: Routes = [
  
  { path: 'hocsinh', component: DemoHocsinhComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

