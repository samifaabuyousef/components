import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend-layout',
  templateUrl: './backend-layout.component.html',
  styleUrls: ['./backend-layout.component.scss']
})
export class BackendLayoutComponent implements OnInit {
  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
