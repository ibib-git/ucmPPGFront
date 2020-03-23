import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsErrorsComponent } from './inputs-errors.component';

describe('InputsErrorsComponent', () => {
  let component: InputsErrorsComponent;
  let fixture: ComponentFixture<InputsErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
