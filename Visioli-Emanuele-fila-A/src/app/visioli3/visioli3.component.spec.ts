import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visioli3Component } from './visioli3.component';

describe('Visioli3Component', () => {
  let component: Visioli3Component;
  let fixture: ComponentFixture<Visioli3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Visioli3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Visioli3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
