import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A320Component } from './a320.component';

describe('A320Component', () => {
  let component: A320Component;
  let fixture: ComponentFixture<A320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
