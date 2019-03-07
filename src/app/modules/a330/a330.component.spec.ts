import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A330Component } from './a330.component';

describe('A330Component', () => {
  let component: A330Component;
  let fixture: ComponentFixture<A330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
