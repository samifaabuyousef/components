import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BaseDataSource } from 'src/app/core/models/base-data-source';
import { Delegation } from '../models/delegation';
import { TestService } from '../test.service';

export interface IPost {
  id: string;
  author?: string;
  title?: string;
  category?: string;
  date?: string;
}



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit , AfterViewInit {
  hideDataSource = true;
  public form: FormGroup;
  public formStatus = true;
  dataSource: BaseDataSource<Delegation>;
  delegations = [];
  campaignId: any;
  searchKey: string;
  displayedColumns = ['id', 'clinicName', 'mobile', 'city', 'status', 'actions'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('searchInput', {static: true}) searchInput: ElementRef;
  searchForm: FormGroup;
  typeArray = [ 'Adds', 'Networks', 'Association'];
  filterValue = 'Networks';
  isHcpLoading: boolean;
  @ViewChild('modal', {static: true}) modal;
  pageSize: number;
  pageNumber: number;
  userId: any;
  isWatchModalLoading: boolean;
  modalTitle: string;
  totalArrayLength: number;
  isLoadingMore: boolean;
  dataSourceData: any;
  filterObjecyValue: any;


  constructor(
              public dialog: MatDialog,
              private testService: TestService) {
   }

  ngOnInit(): void {
    this.dataSource = new BaseDataSource<Delegation>(this.testService);

    this.paginator.page.pipe(
      tap(() => this.load())
    ).subscribe();
    this.dataSource.currentData.subscribe((data) => {
      this.dataSourceData = data;
    });
    this.load();
  }


  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
  }


  // tslint:disable-next-line:typedef
  load() {

    this.dataSource.load(this.paginator.pageIndex + 1, this.paginator.pageSize);
  }






  // tslint:disable-next-line:typedef
  loadNextPage() {
    this.isLoadingMore = true;
    this.pageNumber = this.pageNumber + 1;
    // this.getSats(this.userId);
  }




  // tslint:disable-next-line:typedef
  applyFilter(event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
