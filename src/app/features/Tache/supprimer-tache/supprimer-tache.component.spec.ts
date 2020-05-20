import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerTacheComponent } from './supprimer-tache.component';

describe('SupprimerTacheComponent', () => {
  let component: SupprimerTacheComponent;
  let fixture: ComponentFixture<SupprimerTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
