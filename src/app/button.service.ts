import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  private _buttons: boolean[]

  constructor() { 
    this._buttons = new Array(7)
  }

  toggleButton(index) {
    this._buttons[index] = this._buttons[index] ? false : true;
  }

  get buttons() {
    return this._buttons;
  }

  set buttons(value: boolean[]) {
    this._buttons = value;    
  }
}
