import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPocComponent } from './grid-poc.component';

describe('GridPocComponent', () => {
  let component: GridPocComponent;
  let fixture: ComponentFixture<GridPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
