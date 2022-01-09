import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-radio-group-search',
  templateUrl: './radio-group-search.component.html',
  styleUrls: ['./radio-group-search.component.scss']
})
export class RadioGroupSearchComponent implements OnInit {

  @Input() groups;
  @Input() selectedGroup;
  searchTerm;
  // tslint:disable-next-line:variable-name
  labels_display;
  groupsForm: FormGroup;
  @Output()
  groupsChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  search(searchterm): void {
    // tslint:disable-next-line:only-arrow-functions
    this.labels_display = this.groups.filter(function(tag) {
      return tag.name.toLowerCase().indexOf(searchterm) >= 0;
    });
  }

  // tslint:disable-next-line:typedef
  initGroupsForm() {
    this.groupsForm =  this.builder.group({
      groups: new FormControl('', [Validators.required]),
    });
  }


  // tslint:disable-next-line:typedef
  activateGroupsForm() {
    this.groupsForm.valueChanges.subscribe(res => {
      this.groupsChange.emit(res);
    });
  }



}
