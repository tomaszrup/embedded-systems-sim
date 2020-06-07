import { Component, OnInit } from '@angular/core';
import { CodeService } from '../code.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  constructor(public codeService: CodeService) { }

  ngOnInit(): void {
      
  }

}
