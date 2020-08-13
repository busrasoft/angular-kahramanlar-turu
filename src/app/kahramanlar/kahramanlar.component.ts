import { Component, OnInit } from '@angular/core';
import { KahramanService } from '../kahraman.service';
import { Kahraman } from '../kahraman';
import { MesajService } from '../mesaj.service';


@Component({
  selector: 'app-kahramanlar',
  templateUrl: './kahramanlar.component.html',
  styleUrls: ['./kahramanlar.component.css']
})
export class KahramanlarComponent implements OnInit {
  selectedKahraman: Kahraman;

  kahramanlar: Kahraman[];  

  constructor( 
    private mesajService: MesajService,
    private kahramanService: KahramanService) { }

  ngOnInit(): void {
    this.getKahramanlar();
  }

  onSelect(kahraman: Kahraman): void {
    this.selectedKahraman = kahraman;
    this.mesajService.add(`KahramanComponent : Secili kahramanin IDsi =${kahraman.id}`);
  }

  getKahramanlar(): void {
    this.kahramanService.getKahramanlar()
    .subscribe(kahramanlar=>this.kahramanlar=kahramanlar);
  }
}
