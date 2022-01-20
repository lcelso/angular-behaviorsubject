import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmissorComponent } from './emissor/emissor.component';
import { AppService } from './app.service';
import { VisualizadorComponent } from './visualizador/visualizador.component';
import { CounterComponent } from './counter/counter.component';
@NgModule({
  declarations: [
    AppComponent,
    EmissorComponent,
    VisualizadorComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
