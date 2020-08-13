import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesajService {
  mesaj: string[] = [];

  add(mesaj: string){
    this.mesaj.push(mesaj);
  }

  clear() {
    this.mesaj =[];
  }
  constructor() { }
}
