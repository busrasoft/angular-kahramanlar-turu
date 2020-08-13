import { Component, OnInit, Input } from '@angular/core';
import { Kahraman } from '../kahraman';

@Component({
  selector: 'app-kahraman-detayi',
  templateUrl: './kahraman-detayi.component.html',
  styleUrls: ['./kahraman-detayi.component.css']
})
export class KahramanDetayiComponent implements OnInit {

  @Input() kahraman : Kahraman;
  constructor() { }

  ngOnInit(): void {
  }

}
