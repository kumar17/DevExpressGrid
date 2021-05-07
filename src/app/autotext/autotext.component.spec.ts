import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutotextComponent } from './autotext.component';

describe('AutotextComponent', () => {
  let component: AutotextComponent;
  let fixture: ComponentFixture<AutotextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutotextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutotextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
