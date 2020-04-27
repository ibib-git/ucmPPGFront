import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheEnfantComponent } from './tache-enfant.component';

describe('TacheEnfantComponent', () => {
  let component: TacheEnfantComponent;
  let fixture: ComponentFixture<TacheEnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheEnfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
