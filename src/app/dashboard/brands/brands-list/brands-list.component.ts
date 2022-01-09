import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { PopupComponent } from 'src/app/core/components/popup/popup.component';
import { BaseDataSource } from 'src/app/core/models/base-data-source';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss']
})
export class BrandsListComponent implements OnInit, AfterViewInit {
  dataSource: BaseDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild('searchInput', {static: true}) searchInput: ElementRef;
  searchForm: FormGroup;
  private sortingFilter: {};
  private sortArray: any[];
  private dataSourceData: any;

  displayedColumns: any = ['id', 'name', 'arabicName', 'advertiser', 'actions'];
  filterObjecyValue: any;
  constructor(    public brandService: BrandService,
                  public dialog: MatDialog,
                  private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dataSource = new BaseDataSource<any>(this.brandService);
    this.paginator.page.pipe(
      tap(() => this.load())
    ).subscribe();
    this.load();
    this.initSearchForm();
    this.dataSource.currentData.subscribe((data) => {

      this.dataSourceData = data;
    });
  }

  // tslint:disable-next-line:typedef
  private initSearchForm() {
    this.searchForm = this.fb.group({
      searchText: '',
    });
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.search();
        })
      )
      .subscribe();
  }

  // tslint:disable-next-line:typedef
  load() {
    const newObj = {
      ...this.sortingFilter,
      ...this.filterObjecyValue,
    };
    this.dataSource.load(newObj, 'asc', this.paginator.pageIndex + 1, this.paginator.pageSize);
  }

  // tslint:disable-next-line:typedef
  onSubmit(searchForm: FormGroup) {
    this.search();
  }

  // tslint:disable-next-line:typedef
  private search() {
    const search = this.searchInput.nativeElement.value.trim();

    this.filterObjecyValue = {
      // tslint:disable-next-line:object-literal-key-quotes
      'q': search
    };

    this.load();
  }

  // tslint:disable-next-line:typedef
  public openDeleteDialog(brand) {
    const name = brand.name;
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: 'Delete Brand',
        description: 'Are you sure you want to delete ' + name + ' Brand ?'
      },
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.dataSource.setLoadingSubject(true);
          this.brandService.delete(brand.id).subscribe(res => {
            this.load();
            console.log('  brand deleted successfully');
            setTimeout(() => {
              this.dataSource.setLoadingSubject(false);
            }, 2000);
          }, error => {
            console.log('brand can not be deleted because it is attached to another data');
            this.dataSource.setLoadingSubject(false);
            throw error;
          });
        }
      });
  }

  // tslint:disable-next-line:typedef
  sortData(sort: Sort) {

    if (!sort.active || sort.direction === '' || !this.dataSourceData) {
      return;
    }
    this.dataSourceData.data = this.dataSourceData.data.sort((a, b) => {

      this.sortArray = [];
      switch (sort.active) {
        case 'id':
          this.sortArray.push({key: 'id', direction: sort.direction});
          break;
        case 'name':
          this.sortArray.push({key: 'generic_name', direction: sort.direction});
          break;
        case 'arabicName':
          this.sortArray.push({key: 'name', direction: sort.direction});
          break;
        default:
          return 0;
      }
    });
    const obj: any = {};
    this.sortingFilter = {};
    if (this.sortArray.length > 0) {


      for (let index = 0; index < this.sortArray.length; index++) {
        const element = this.sortArray[index];
        obj['sort[' + index.toString() + '][key]'] = element.key;
        obj['sort[' + index.toString() + '][direction]'] = element.direction;

      }

      this.sortingFilter = obj;
    }

    this.load();
  }

}
