import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {
  cadena: string;
  constructor(private route: Router, private rutaActivada: ActivatedRoute) {
    // this.rutaActivada.queryParamMap.subscribe(() => {
    //   this.cadena = this.route.getCurrentNavigation().extras.state.nameCurso;
    // });
  }

  ngOnInit() {}
}
