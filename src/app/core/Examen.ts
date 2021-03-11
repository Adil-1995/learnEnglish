import {Palabra} from './palabra';

export class Examen {
  constructor(private _parteUno: string, private _parteDos: string, private _idPalabraCorrecta: number, private _options?: Palabra[]) {
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

  get options(): Palabra[] {
    return this._options;
  }
  set options(value: Palabra[]) {
    this._options = value;
  }
}
