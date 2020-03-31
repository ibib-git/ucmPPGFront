import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetGestionComponent } from './projet-gestion.component';

describe('ProjetGestionComponent', () => {
  let component: ProjetGestionComponent;
  let fixture: ComponentFixture<ProjetGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
