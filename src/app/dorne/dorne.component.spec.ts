import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DorneComponent } from './dorne.component';

describe('DorneComponent', () => {
  let component: DorneComponent;
  let fixture: ComponentFixture<DorneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DorneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
