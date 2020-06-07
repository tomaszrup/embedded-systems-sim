import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  private _vars: string
  private _code: string

  constructor() { 
    if(localStorage.getItem('vars')) {
      this._vars = localStorage.getItem('vars')
    }
    if(localStorage.getItem('code')) {
      this._code = localStorage.getItem('code')
    }
  }

  get vars() {
    return this._vars
  }

  set vars(value: string) {
    this._vars = value
    localStorage.setItem('vars', value);
  }

  get code() {
    return this._code
  }

  set code(value: string) {
    this._code = value
    localStorage.setItem('code', value);
  }
}
