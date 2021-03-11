import {NacionalitiesService} from './../../shared/nacionalities.service';
import {Component, OnInit} from '@angular/core';
import {Cadenas} from 'src/app/core/cadenas';
<<<<<<< HEAD
import {NavigationExtras, Router} from '@angular/router';
=======
>>>>>>> fe109c003c671d8f0c893a9ef7b5eb264d2fb172

@Component({
  selector: 'app-nacionalidades',
  templateUrl: './nacionalidades.page.html',
  styleUrls: ['./nacionalidades.page.scss'],
})
export class NacionalidadesPage implements OnInit {
  public frases: Cadenas[];
  private id: number = 4;

  constructor(private nacionalidad: NacionalitiesService, private router: Router) {
    this.frases = this.nacionalidad.frases;
  }

  ngOnInit() {
  }

  routerMe() {
    const extrasDeNavegcacion: NavigationExtras = {
      state: {
        idTema: this.id,
      }
    };
    this.router.navigate(['examen'], extrasDeNavegcacion);
  }
}
