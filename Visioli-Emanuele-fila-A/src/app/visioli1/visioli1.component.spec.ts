import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visioli1Component } from './visioli1.component';

describe('Visioli1Component', () => {
  let component: Visioli1Component;
  let fixture: ComponentFixture<Visioli1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Visioli1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Visioli1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
