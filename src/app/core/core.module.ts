import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {SafePipe} from './pipelines/safe';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from './services/crud.service';
import { UploadComponent } from './components/upload/upload.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { PopupComponent } from './components/popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { SearchPipe } from './pipelines/search.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SelectComponent } from './components/select/select.component';
import { RadioGroupSearchComponent } from './components/radio-group-search/radio-group-search.component';
import { InputCounterComponent } from './components/input-counter/input-counter.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { MultiUploaderComponent } from './components/multi-uploader/multi-uploader.component';



@NgModule({
  declarations: [
    SafePipe,
    UploadComponent,
    BreadcrumbComponent,
    DropdownComponent,
    PopupComponent,
    SearchPipe,
    SelectComponent,
    RadioGroupSearchComponent,
    InputCounterComponent,
    DatepickerComponent,
    MultiUploaderComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    DragDropModule,
    RouterModule,
    MatDatepickerModule,
    HttpClientModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatAutocompleteModule
  ],
  exports: [
    BreadcrumbComponent,
    UploadComponent,
    DropdownComponent,
    SafePipe,
    SelectComponent,
    DatepickerComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'never' } },
  ]

})
export class CoreModule {
  constructor() {
  }
}


