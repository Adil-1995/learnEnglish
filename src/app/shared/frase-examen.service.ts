import {Injectable} from '@angular/core';
import {DatosEnglishService} from './datos-english.service';
import {Examen} from '../core/Examen';
<<<<<<< HEAD
import {Palabra} from '../core/palabra';
import {PalabrasService} from './palabras.service';
=======
>>>>>>> fe109c003c671d8f0c893a9ef7b5eb264d2fb172

@Injectable({
  providedIn: 'root'
})
export class FraseExamenService {

<<<<<<< HEAD
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
=======
  constructor(private db: DatosEnglishService) {
  }

   generateData(tipo: number) {
    return new Promise<Examen[]>((resolve, reject) => {
      this.db.getExamenFromType(tipo).then((data) => resolve(data));
    });
  }
>>>>>>> fe109c003c671d8f0c893a9ef7b5eb264d2fb172
}
