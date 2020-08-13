import { Component, OnInit } from '@angular/core';

import { Kahraman } from '../kahraman';
import { KahramanService } from '../kahraman.service';


@Component({
  selector: 'app-kahramanlar',
  templateUrl: './kahramanlar.component.html',
  styleUrls: ['./kahramanlar.component.css']
})
export class KahramanlarComponent implements OnInit {
  kahramanlar: Kahraman[];

  constructor(private kahramanService: KahramanService) { }

  ngOnInit(): void {
    this.getKahramanlar();
  }

  getKahramanlar(): void {
    this.kahramanService.getKahramanlar()
      .subscribe(kahramanlar => this.kahramanlar = kahramanlar);
  }
}
