import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {
    MatRadioModule
 } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
    imports: [MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatInputModule,
        MatSortModule,
        MatIconModule,
        MatFormFieldModule,
        MatTabsModule,
        MatExpansionModule,
        MatDialogModule,
        MatStepperModule,
        MatSidenavModule,
        MatDividerModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatInputModule,
        MatSortModule,
        MatIconModule,
        MatFormFieldModule,
        MatTabsModule,
        MatExpansionModule,
        MatDialogModule,
        MatStepperModule,
        MatSidenavModule,
        MatDividerModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule ]
})
export class MaterialModule {}
