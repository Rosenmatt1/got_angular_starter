import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterfellComponent } from './winterfell.component';

describe('WinterfellComponent', () => {
  let component: WinterfellComponent;
  let fixture: ComponentFixture<WinterfellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterfellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterfellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
