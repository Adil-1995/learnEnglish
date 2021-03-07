import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // public variable: Number = 10;
  public variable = 4;
  // tslint:disable-next-line:ban-types
  public mostrar: Boolean;
  constructor(private router: Router) {}

  toViajar() {
    const navExtras: NavigationExtras = {
      // NavigationExtras =>para pasar cada datos
      state: {
        variableApasar: this.variable

      },
    };
    this.router.navigate(['viajar'], navExtras);
  }
  toComida() {
    this.router.navigate(['comida']);
  }
  toInformatica() {
    this.router.navigate(['informatica']);
  }
  toNacionalidades() {
    this.router.navigate(['nacionalidades']);
  }
}
