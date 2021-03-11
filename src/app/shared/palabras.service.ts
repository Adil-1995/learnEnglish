import { Palabra } from './../core/palabra';
import { DatosEnglishService } from './datos-english.service';
import { Injectable } from '@angular/core';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  constructor(private db: DatosEnglishService) { }

  generateData(){
    this.db.obtenerPlabras().then((data) => {
      data.forEach(x => {

      });
    })
  }
}
