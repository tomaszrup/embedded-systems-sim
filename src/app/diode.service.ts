import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiodeService {
  private _diodes: boolean[]

  constructor() { 
    this._diodes = new Array(7)
  }

  toggleDiode(index) {
    this._diodes[index] = this._diodes[index] ? false : true;
  }

  get diodes() {
    return this._diodes;
  }

  set diodes(value: boolean[]) {
    this._diodes = value;    
  }
}
