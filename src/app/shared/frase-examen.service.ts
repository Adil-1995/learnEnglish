import {Injectable} from '@angular/core';
import {DatosEnglishService} from './datos-english.service';
import {Examen} from '../core/Examen';
import {Palabra} from '../core/palabra';
import {PalabrasService} from './palabras.service';

@Injectable({
  providedIn: 'root'
})
export class FraseExamenService {

  constructor(private db: DatosEnglishService, private palabrasServ: PalabrasService) {
  }

  generateData(tipo: number) {
    return new Promise<Examen[]>((resolve, reject) => {
      this.db.getExamenFromType(tipo).then((data) => {
        this.generateOptions(data).then(() => resolve(data));
      });
    });
  }

  private generateOptions(data: Examen[]) {
    return new Promise<void>((resolve, reject) => {
      let array: Palabra[];
      data.forEach((e) => {
        array = [];
        for (let i = 0; i < 3; i++) {
          console.log(array);


          if (i === 0) {
            array.push(this.palabrasServ.palabrasMap.get(e.idPalabraCorrecta));
          } else {
            let random;
            do {
              random = Math.floor(Math.random() * (1 - (23 + 1)) + (23));
            } while (random === e.idPalabraCorrecta);
            array.push(this.palabrasServ.palabrasMap.get(random));
          }
        }
        e.options = array;
      });
      resolve();
    });

  }
}
