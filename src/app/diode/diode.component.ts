import { Component, OnInit, Input } from '@angular/core';
import { DiodeService } from '../diode.service';

@Component({
  selector: 'app-diode',
  templateUrl: './diode.component.html',
  styleUrls: ['./diode.component.scss']
})
export class DiodeComponent implements OnInit {

  constructor(public diodeService: DiodeService) { }

  ngOnInit(): void {
  }

  @Input()
  diodeIndex: number

}
