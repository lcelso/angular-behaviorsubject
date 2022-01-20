import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.scss']
})
export class VisualizadorComponent implements OnInit, OnDestroy {

  @Input()
  nomeBehaviorSubject!: BehaviorSubject<string>;
  nomeBehaviorSubjectSubscription!: Subscription;
  nomeBehaviorSubjectNomeCounter = new BehaviorSubject<number>(0);
  nomeCount = this.nomeBehaviorSubjectNomeCounter.value;

  
  musicaSubscription!: Subscription;
  nomeBehaviorSubjectMusicaCounter = new BehaviorSubject<number>(0);
  musicaCount = this.nomeBehaviorSubjectMusicaCounter.value;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.nomeBehaviorSubjectSubscription = this.nomeBehaviorSubject.subscribe(valor => {
      this.nomeCount++;
      this.nomeBehaviorSubjectNomeCounter.next(this.nomeCount);
    });
  
    this.musicaSubscription = this.appService.obterMusica()
      .subscribe(valor => {
        this.musicaCount++;
        this.nomeBehaviorSubjectMusicaCounter.next(this.musicaCount);
      });
  }

  ngOnDestroy() {
    if (this.musicaSubscription)
      this.musicaSubscription.unsubscribe();

    if (this.nomeBehaviorSubjectSubscription)
      this.nomeBehaviorSubjectSubscription.unsubscribe();
  }

  get musica(): string {
    return this.appService.obterMusica().value;
  }

}
