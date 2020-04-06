import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetUtilisateurComponent } from './projet-utilisateur.component';

describe('ProjetUtilisateurComponent', () => {
  let component: ProjetUtilisateurComponent;
  let fixture: ComponentFixture<ProjetUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
