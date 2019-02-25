import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssosComponent } from './essos.component';

describe('EssosComponent', () => {
  let component: EssosComponent;
  let fixture: ComponentFixture<EssosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
