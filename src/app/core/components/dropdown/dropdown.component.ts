import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() title = '';
  @Input() optionNameField = '';
  @Input() optionValueField = '';
  @Input() options = [];
  @Input() disabled = false;
  @Input() propertyKey = '';
  @Input() value = {
    optionTitle: null,
    optionValue: null
  };
  @ViewChild('dropdown', {static: false}) dropdown;
  @Output() optionSelected = new EventEmitter<{
    value: string;
    propertyKey: string;
  }>();
  constructor() { }

  // tslint:disable-next-line:typedef
  onOptionSelected(value) {
    console.log(value);
    this.dropdown.close();
    this.value = value;
    this.optionSelected.emit({ value, propertyKey: this.propertyKey });
  }

  ngOnInit(): void {
  }

}
