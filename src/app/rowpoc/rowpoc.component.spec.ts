import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowpocComponent } from './rowpoc.component';

describe('RowpocComponent', () => {
  let component: RowpocComponent;
  let fixture: ComponentFixture<RowpocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowpocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
