import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGridComponentComponent } from './detail-grid-component.component';

describe('DetailGridComponentComponent', () => {
  let component: DetailGridComponentComponent;
  let fixture: ComponentFixture<DetailGridComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailGridComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
