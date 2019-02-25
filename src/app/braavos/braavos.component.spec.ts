import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraavosComponent } from './braavos.component';

describe('BraavosComponent', () => {
  let component: BraavosComponent;
  let fixture: ComponentFixture<BraavosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraavosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraavosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
