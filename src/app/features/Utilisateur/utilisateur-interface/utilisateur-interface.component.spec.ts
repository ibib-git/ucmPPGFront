import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurInterfaceComponent } from './utilisateur-interface.component';

describe('UtilisateurInterfaceComponent', () => {
  let component: UtilisateurInterfaceComponent;
  let fixture: ComponentFixture<UtilisateurInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
