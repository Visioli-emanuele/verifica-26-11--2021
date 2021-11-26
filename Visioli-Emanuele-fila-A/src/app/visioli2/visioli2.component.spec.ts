import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visioli2Component } from './visioli2.component';

describe('Visioli2Component', () => {
  let component: Visioli2Component;
  let fixture: ComponentFixture<Visioli2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Visioli2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Visioli2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
