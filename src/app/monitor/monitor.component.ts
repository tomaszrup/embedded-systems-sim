import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  originalVars: any[]
  currentVars: any[]
  window

  constructor() { }

  ngOnInit(): void {
    this.window = window
    this.originalVars = Object.keys( window )
  }

  calculateVariables() {
    let newVars =Object.keys( window )
    this.currentVars = newVars.filter( (name) => {      
      return !this.originalVars.includes(name) && !name.startsWith("__")
    }).sort();  
  }

  resetVariables() {
    this.currentVars.map(v => {
      delete window[v]
    })
    this.currentVars = []
  }


}
