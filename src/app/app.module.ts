import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KahramanlarComponent } from './kahramanlar/kahramanlar.component';
import { KahramanDetayiComponent } from './kahraman-detayi/kahraman-detayi.component';
import { MesajlarComponent } from './mesajlar/mesajlar.component';
import { GostergePaneliComponent } from './gosterge-paneli/gosterge-paneli.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    KahramanlarComponent,
    KahramanDetayiComponent,
    MesajlarComponent,
    GostergePaneliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
