import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Input() dateLabel: string;
  @Output() dateSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onDateChange(date) {
    this.dateSelected.emit(date);
  }

}
