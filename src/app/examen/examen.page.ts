import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PalabrasService} from '../shared/palabras.service';
import {FraseExamenService} from '../shared/frase-examen.service';
import {Examen} from '../core/Examen';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {
  private id: number;
  private examenArray: Examen[] = [];

  constructor(private route: Router, private rutaActivada: ActivatedRoute, private palabrasServ: PalabrasService, private fraseExamen: FraseExamenService) {
    this.rutaActivada.queryParamMap.subscribe(() => {
      this.id = this.route.getCurrentNavigation().extras.state.idTema;
      this.fraseExamen.generateData(this.id).then((data) => this.examenArray = data);
    });
  }

  ngOnInit() {
  }

  isCorrecto(idCorrecto: number, idPrueba: number) {
    if (idCorrecto === idPrueba) {
      alert('Correcto');
    } else {
      alert('Fallado');
    }

  }
}
