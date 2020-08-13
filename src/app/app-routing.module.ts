import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GostergePaneliComponent } from './gosterge-paneli/gosterge-paneli.component';
import { KahramanDetayiComponent } from './kahraman-detayi/kahraman-detayi.component';
import { KahramanlarComponent } from './kahramanlar/kahramanlar.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', redirectTo: '/gosterge', pathMatch: 'full' },
  { path: 'gosterge', component: GostergePaneliComponent },
  { path: 'detay/:id', component: KahramanDetayiComponent },
  { path: 'kahramanlar', component: KahramanlarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
