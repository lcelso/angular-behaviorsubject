import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from '../app.service'

@Component({
  selector: 'app-emissor',
  templateUrl: './emissor.component.html',
  styleUrls: ['./emissor.component.scss']
})
export class EmissorComponent implements OnInit {
  @Input()
  nomeBehaviorSubject!: BehaviorSubject<string>;
  
  constructor(
    private appService: AppService,
  ) { 
  }
    
  ngOnInit() {
  }

  enviarViaInput(nome: string) {
    this.nomeBehaviorSubject.next(nome);
  }

  enviarViaService(musica: string) {
    this.appService.alterarMusica(musica);
  }

}
