import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A350Component } from './a350.component';

describe('A350Component', () => {
  let component: A350Component;
  let fixture: ComponentFixture<A350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
