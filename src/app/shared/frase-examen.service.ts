import {Injectable} from '@angular/core';
import {DatosEnglishService} from './datos-english.service';
import {Examen} from '../core/Examen';

@Injectable({
  providedIn: 'root'
})
export class FraseExamenService {

  constructor(private db: DatosEnglishService) {
  }

   generateData(tipo: number) {
    return new Promise<Examen[]>((resolve, reject) => {
      this.db.getExamenFromType(tipo).then((data) => resolve(data));
    });
  }
}
