import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
  @Input()
  nomeBehaviorSubject!: BehaviorSubject<number>;
  counterSubscription!: Subscription;
  counters = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.counterSubscription = this.nomeBehaviorSubject.subscribe(valor => {
      this.counters = valor;
    })
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) this.counterSubscription.unsubscribe();
  }

}
