import { Component, OnInit, ViewChild } from '@angular/core';
import { CodeService } from '../code.service';
import { DiodeService } from '../diode.service';
import { ConsoleService } from '../console.service';
import { MonitorComponent } from '../monitor/monitor.component';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-zbiorniczek',
  templateUrl: './zbiorniczek.component.html',
  styleUrls: ['./zbiorniczek.component.scss']
})
export class ZbiorniczekComponent implements OnInit {

  interval = null
  running: boolean = false
  cycle: number = 100
  cachedCode: string
  L1 = 0; L2 = 0; L3 = 0; L4 = 0; L5 = 0; L6 = 0; L7 = 0;

  @ViewChild("monitor") monitor: MonitorComponent

  constructor(private codeService: CodeService,
    public diodeService: DiodeService,
    private consoleService: ConsoleService,
    public buttonService: ButtonService) {
  }

  private updateDiodes() {
    this.diodeService.diodes = [this.L1 > 0,
    this.L2 > 0, this.L3 > 0,
    this.L4 > 0, this.L5 > 0,
    this.L6 > 0, this.L7 > 0];
  }

  ngOnInit(): void {
  }

  toggle() {
    if (this.running) {
      this.running = false
      this.reset()
    } else {
      this.running = true
      this.run()
    }
  }

  reset() {
    this.monitor.resetVariables()
    clearInterval(this.interval)
    this.interval = null
    this.L1 = this.L2 = this.L3 = this.L4 = this.L5 = this.L6 = this.L7 = 0;
    this.updateDiodes();
  }

  run() {

    if(this.codeService.vars) {
      try {
        window.eval(this.transformVars(this.codeService.vars))
      } catch (e) {
        alert("Błąd zmiennych: " + e)
        this.running = false
        return;
      }
    }

    if(this.codeService.code) {
      try {
        this.cachedCode = this.transformCode(this.codeService.code)
      } catch (e) {
        alert("Bład kodu: " + e)
        this.running = false
        return;
      }
    }

    this.monitor.calculateVariables();
    this.interval = setInterval(this.once.bind(this), this.cycle)
  }

  transformVars(vars: string): string {
    return vars.replace(/char/g, "var ")
      .replace(/int/g, "var ")
      .replace(/\[\]/g, "")
      .replace(/{/g, "[")
      .replace(/}/g, "]")
      .replace('#include "serial.c"', '')
      .replace(/([A-Z|a-z]+\w*)\s*([,;])/g, '$1=0$2');
  }

  transformCode(code: string): string {
    return code.replace("UART_init", '//')
      .replace(/\+'0'/g, "")
      //.replace(/\-'0'/g, "")
      .replace("znak != 0", "znak")
      .replace(/(?<!=)==(?!=)/g, "===")
      .replace(/(?<!=)!=(?!=)/g, "!==")
  }

  once() {
    let ng = this;
    let L1 = this.L1, L2 = this.L2, L3 = this.L3, L4 = this.L4, L5 = this.L5, L6 = this.L6, L7 = this.L7;

    let [aK1, aK2, aK3, aK4, aK5, aK6, aK7] = this.buttonService.buttons;

    let COM_recv = function() {
      return ng.consoleService.getQueuedInput() || 0;
    }

    let COM_send = function(msg) {
      ng.consoleService.pushToHistory(msg);
    }

    try {
      eval(this.cachedCode)
    } catch(e) {
      this.toggle()
      alert("Błąd kodu: " + e)
      return
    }

    this.L1 = L1, this.L2 = L2, this.L3 = L3, this.L4 = L4, this.L5 = L5, this.L6 = L6, this.L7 = L7;

    this.updateDiodes();
  }

}
