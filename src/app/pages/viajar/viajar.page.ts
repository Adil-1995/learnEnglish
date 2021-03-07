import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajar',
  templateUrl: './viajar.page.html',
  styleUrls: ['./viajar.page.scss'],
})
export class ViajarPage implements OnInit {
  variableRecibida: number;

  constructor(public route: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
     this.rutaActiva.queryParams.subscribe(() => {
       // tslint:disable-next-line:prefer-const
       let navVariable = this.route.getCurrentNavigation().extras.state;
       this.variableRecibida = navVariable.variableApasar;
    });
  }

}
