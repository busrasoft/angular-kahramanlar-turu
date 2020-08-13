import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Kahraman } from '../kahraman';
import { KahramanService } from '../kahraman.service';

@Component({
  selector: 'app-kahraman-detayi',
  templateUrl: './kahraman-detayi.component.html',
  styleUrls: ['./kahraman-detayi.component.css']
})
export class KahramanDetayiComponent implements OnInit {
  kahraman: Kahraman;

  constructor(
    private route: ActivatedRoute,
    private kahramanService: KahramanService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getKahraman();
  }

  getKahraman(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.kahramanService.getKahraman(id)
    .subscribe(kahraman => this.kahraman = kahraman);
  }
  
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.kahramanService.updateKahraman(this.kahraman)
      .subscribe(() => this.goBack());
  }
}
