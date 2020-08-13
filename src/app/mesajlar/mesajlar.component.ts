import { Component, OnInit } from '@angular/core';
import { MesajService } from '../mesaj.service';


@Component({
  selector: 'app-mesajlar',
  templateUrl: './mesajlar.component.html',
  styleUrls: ['./mesajlar.component.css']
})
export class MesajlarComponent implements OnInit {

  constructor(public mesajService: MesajService) { }

  ngOnInit(): void {
  }

}
