export class Examen {
  constructor(private _parteUno: string, private _parteDos: string, private _idPalabraCorrecta: number) {
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
}
