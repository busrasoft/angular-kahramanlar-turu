import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KahramanlarComponent } from './kahramanlar/kahramanlar.component';
import { KahramanDetayiComponent } from './kahraman-detayi/kahraman-detayi.component';

@NgModule({
  declarations: [
    AppComponent,
    KahramanlarComponent,
    KahramanDetayiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
