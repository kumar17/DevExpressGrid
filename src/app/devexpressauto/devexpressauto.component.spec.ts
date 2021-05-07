import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevexpressautoComponent } from './devexpressauto.component';

describe('DevexpressautoComponent', () => {
  let component: DevexpressautoComponent;
  let fixture: ComponentFixture<DevexpressautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevexpressautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevexpressautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
