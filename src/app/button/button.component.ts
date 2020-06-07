import { Component, OnInit, Input } from '@angular/core';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(public buttonService: ButtonService) { }

  ngOnInit(): void {
  }

  enableButton() {
    this.buttonService.toggleButton(this.buttonIndex)
  }

  @Input()
  buttonIndex: number

}
