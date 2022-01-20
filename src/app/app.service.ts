import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {
  private musicaServiceBehaviorSubject = new BehaviorSubject<string>(`Dio - Egypt`);

  constructor() { }

  alterarMusica(valor: string) {
    this.musicaServiceBehaviorSubject.next(valor);
  }

  obterMusica() {
    return this.musicaServiceBehaviorSubject;
  }
}