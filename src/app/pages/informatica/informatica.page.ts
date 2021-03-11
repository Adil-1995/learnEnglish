import { Component, OnInit } from '@angular/core';
import { Cadenas } from 'src/app/core/cadenas';
import { ComputingService } from 'src/app/shared/computing.service';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.page.html',
  styleUrls: ['./informatica.page.scss'],
})
export class InformaticaPage implements OnInit {

  public frases: Cadenas[];
  private id: number = 3;
  constructor(private infomatica: ComputingService) {
    this.frases = this.infomatica.frases;
  }

  ngOnInit() {
  }

}
