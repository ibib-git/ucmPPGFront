import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTacheComponent } from './ajouter-tache.component';

describe('AjouterTacheComponent', () => {
  let component: AjouterTacheComponent;
  let fixture: ComponentFixture<AjouterTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
