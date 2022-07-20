import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './control/add/add.component';
import { ControlComponent } from './control/control.component';
import { DisplayComponent } from './control/display/display.component';
import { DataResolverService } from './Data/data-resolver.service';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'dashboard', component:ControlComponent, resolve:[DataResolverService] },
  { path:'Dashboard', component:ControlComponent },
  { path:'addcustomer', component:AddComponent },
  { path:':id/editcustomer', component:AddComponent, resolve:[DataResolverService] },
  { path:':id/display', component:DisplayComponent, resolve:[DataResolverService] },
  { path:'menu', component:MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
