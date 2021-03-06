import { Injectable } from '@angular/core';
import { Cadenas } from '../core/cadenas';
import { DatosEnglishService } from './datos-english.service';

@Injectable({
  providedIn: 'root'
})
export class NacionalitiesService {

  public frases: Cadenas[];

  constructor(private db: DatosEnglishService) {
    this.frases = [];
    this.generateData();
  }
  generateData() {
    this.db
      .obtenerFraseNacionalidades()
      .then((data) => {
        console.log(data);

        data.forEach((x) => {
          const frase: Cadenas = new Cadenas(x.fraseIn, x.fraseEs);
          this.frases.push(frase);
        });
      })
      .catch(() => {});
  }
}
