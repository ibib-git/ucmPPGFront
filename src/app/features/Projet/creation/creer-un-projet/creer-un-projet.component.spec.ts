import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerUnProjetComponent } from './creer-un-projet.component';

describe('CreerUnProjetComponent', () => {
  let component: CreerUnProjetComponent;
  let fixture: ComponentFixture<CreerUnProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerUnProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerUnProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
