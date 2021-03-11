import {Component, OnInit} from '@angular/core';
import {Cadenas} from 'src/app/core/cadenas';
import {ComputingService} from 'src/app/shared/computing.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.page.html',
  styleUrls: ['./informatica.page.scss'],
})
export class InformaticaPage implements OnInit {

  public frases: Cadenas[];
  private id: number = 3;
<<<<<<< HEAD

  constructor(private infomatica: ComputingService, private router: Router) {
=======
  constructor(private infomatica: ComputingService) {
>>>>>>> fe109c003c671d8f0c893a9ef7b5eb264d2fb172
    this.frases = this.infomatica.frases;
  }

  routerMe() {
    const extrasDeNavegcacion: NavigationExtras = {
      state: {
        idTema: this.id,
      }
    };
    this.router.navigate(['examen'], extrasDeNavegcacion);
  }

  ngOnInit() {
  }

}
