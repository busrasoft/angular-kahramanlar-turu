import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Kahraman } from './kahraman';
import { KAHRAMANLAR } from './mock-kahramanlar';
import { MesajService } from './mesaj.service';

@Injectable({ providedIn: 'root' })
export class KahramanService {

  constructor(private mesajService: MesajService) { }

  getKahramanlar(): Observable<Kahraman[]>{

    this.mesajService.add(`KahramanService: Fetched Kahramanlar`);
    return of(KAHRAMANLAR);
  }
  getKahraman(id: number): Observable<Kahraman> {

    this.mesajService.add(`KahramanService: Fetched Kahraman id=${id}`);
    return of(KAHRAMANLAR.find(kahraman => kahraman.id === id));
  }
}
