import { Component, OnInit } from '@angular/core';
import { Kahraman } from '../kahraman';
import { KAHRAMANLAR } from '../mock-kahramanlar';

@Component({
  selector: 'app-kahramanlar',
  templateUrl: './kahramanlar.component.html',
  styleUrls: ['./kahramanlar.component.css']
})
export class KahramanlarComponent implements OnInit {

  kahramanlar = KAHRAMANLAR;  
  selectedKahraman: Kahraman;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(kahraman: Kahraman): void {
    this.selectedKahraman = kahraman;
  }
}
