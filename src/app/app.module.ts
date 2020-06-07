import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZbiorniczekComponent } from './zbiorniczek/zbiorniczek.component';
import { DiodeComponent } from './diode/diode.component';
import { ConsoleComponent } from './console/console.component';
import { CodeComponent } from './code/code.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { MonitorComponent } from './monitor/monitor.component';
import { ButtonComponent } from './button/button.component';
import { StorageComponent } from './storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    ZbiorniczekComponent,
    DiodeComponent,
    ConsoleComponent,
    CodeComponent,
    MonitorComponent,
    ButtonComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
