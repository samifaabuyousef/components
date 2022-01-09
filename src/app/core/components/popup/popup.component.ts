import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() title: string;
  @Input()  description: string;
  @Input() cancelLabel: string;
  @Output()
  public deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() confirmLabel: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onConfirm = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClose = new EventEmitter();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  cancel() {
    this.onClose.emit();
  }

  // tslint:disable-next-line:typedef
  confirm() {
    this.onConfirm.emit();
  }

}


