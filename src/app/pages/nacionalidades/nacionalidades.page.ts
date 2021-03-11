import {NacionalitiesService} from './../../shared/nacionalities.service';
import {Component, OnInit} from '@angular/core';
import {Cadenas} from 'src/app/core/cadenas';

@Component({
  selector: 'app-nacionalidades',
  templateUrl: './nacionalidades.page.html',
  styleUrls: ['./nacionalidades.page.scss'],
})
export class NacionalidadesPage implements OnInit {
  public frases: Cadenas[];
  private id: number = 4;

  constructor(private nacionalidad: NacionalitiesService) {
    this.frases = this.nacionalidad.frases;
  }

  ngOnInit() {
  }

}
