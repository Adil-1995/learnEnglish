<<<<<<< HEAD
import {Palabra} from './palabra';

export class Examen {
  constructor(private _parteUno: string, private _parteDos: string, private _idPalabraCorrecta: number, private _options?: Palabra[]) {
=======
export class Examen {
  constructor(private _parteUno: string, private _parteDos: string, private _idPalabraCorrecta: number) {
>>>>>>> fe109c003c671d8f0c893a9ef7b5eb264d2fb172
  }

  get parteUno(): string {
    return this._parteUno;
  }

  get parteDos(): string {
    return this._parteDos;
  }

  get idPalabraCorrecta(): number {
    return this._idPalabraCorrecta;
  }
<<<<<<< HEAD

  get options(): Palabra[] {
    return this._options;
  }
  set options(value: Palabra[]) {
    this._options = value;
  }
=======
>>>>>>> fe109c003c671d8f0c893a9ef7b5eb264d2fb172
}
