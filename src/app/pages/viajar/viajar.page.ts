import { TravelService } from './../../shared/travel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cadenas } from 'src/app/core/cadenas';

@Component({
  selector: 'app-viajar',
  templateUrl: './viajar.page.html',
  styleUrls: ['./viajar.page.scss'],
})
export class ViajarPage implements OnInit {
  public frases: Cadenas[];

  constructor(private travel: TravelService) {
    this.frases = this.travel.frases;
  }

  ngOnInit() {
  }


}
