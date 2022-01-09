import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-counter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.scss']
})
export class InputCounterComponent implements OnInit {
  @ViewChild('input', {static: true}) input: ElementRef;

  @Input()
  public counter = 0;

  @Input()
  public step = 1;

  @Input()
  public readonly = false;

  @Output()
  counterChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public max = 1000;

  @Input()
  public min = 1;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onInput(event: any){
    this.input.nativeElement.value = this.counter;
  }

  // tslint:disable-next-line:typedef
  increment() {
    const value = this.counter + this.step;
    this.setCounter(value);
  }

  // tslint:disable-next-line:typedef
  decrement() {
    const value = this.counter - this.step;
    this.setCounter(value);
  }

  // tslint:disable-next-line:typedef
  onChangeEvent(event: any) {
    const value = event ===''? 0 : parseInt(event, null);
    this.counterChange.emit(value);
    this.setCounter(value);
  }

  // tslint:disable-next-line:typedef
  setCounter(value: number) {

    let correct = true;
    if (value > this.max) {
      this.counter = this.max;
      correct = false;
    }

    if (value < this.min) {
      this.counter = this.min;
      correct = false;
    }

    if (correct) {
      this.counter = value;
    }

    this.counterChange.emit(this.counter);
  }


}
