import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbiorniczekComponent } from './zbiorniczek.component';

describe('ZbiorniczekComponent', () => {
  let component: ZbiorniczekComponent;
  let fixture: ComponentFixture<ZbiorniczekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbiorniczekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbiorniczekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
