import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  line: string = ''
  @ViewChild("history") historyElement

  constructor(public consoleService: ConsoleService) { }

  ngOnInit(): void {
  }

  queueLine($event) {
    this.consoleService.enqueue(this.line)
    this.consoleService.pushToHistory(`$ ${this.line}`, true)
    this.line = ''
    setTimeout( () => this.historyElement.nativeElement.scrollTop = 100000, 100)

  }

  focusInput() {
    document.getElementById("console-input").focus();
  }

}
