import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupSearchComponent } from './radio-group-search.component';

describe('RadioGroupSearchComponent', () => {
  let component: RadioGroupSearchComponent;
  let fixture: ComponentFixture<RadioGroupSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioGroupSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
