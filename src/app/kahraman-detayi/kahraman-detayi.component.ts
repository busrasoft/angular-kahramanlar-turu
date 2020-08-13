import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { KahramanService } from '../kahraman.service';

import { Kahraman } from '../kahraman';

@Component({
  selector: 'app-kahraman-detayi',
  templateUrl: './kahraman-detayi.component.html',
  styleUrls: ['./kahraman-detayi.component.css']
})
export class KahramanDetayiComponent implements OnInit {

  @Input() kahraman : Kahraman;
  constructor(
    private route: ActivatedRoute,
    private kahramanService: KahramanService,
    private location: Location
  ) { }

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
}
