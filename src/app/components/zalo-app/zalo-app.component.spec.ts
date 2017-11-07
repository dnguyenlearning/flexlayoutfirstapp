import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaloAppComponent } from './zalo-app.component';

describe('ZaloAppComponent', () => {
  let component: ZaloAppComponent;
  let fixture: ComponentFixture<ZaloAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaloAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaloAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
