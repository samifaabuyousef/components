import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Option } from 'src/app/dashboard/brands/models/option.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() isMultiple = false;
  @Input() isDisabled = false;
  @Input() title: string;
  @Input() options: Option[];
  @Output() selectChange = new EventEmitter<any>();
  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSelectChange(selection) {
    this.selectChange.emit(selection.value);
  }

  // tslint:disable-next-line:typedef
  initForm() {
    this.form =  this.fb.group({
      field: new FormControl('', [Validators.required]),
    });
  }

}
