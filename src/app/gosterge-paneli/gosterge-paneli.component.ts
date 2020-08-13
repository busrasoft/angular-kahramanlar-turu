import { Component, OnInit } from '@angular/core';
import { Kahraman } from '../kahraman';
import { KahramanService } from '../kahraman.service';

@Component({
  selector: 'app-gosterge-paneli',
  templateUrl: './gosterge-paneli.component.html',
  styleUrls: ['./gosterge-paneli.component.css']
})
export class GostergePaneliComponent implements OnInit {
  kahramanlar: Kahraman[] = [];

  constructor(private kahramanService: KahramanService) { }

  ngOnInit() {
    this.getKahramanlar();
  }

  getKahramanlar(): void{
    this.kahramanService.getKahramanlar()
    .subscribe(kahramanlar=>this.kahramanlar=this.kahramanlar.slice(1,5));
  }
}
