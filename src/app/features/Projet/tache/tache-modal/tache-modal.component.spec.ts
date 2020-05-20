import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheModalComponent } from './tache-modal.component';

describe('TacheModalComponent', () => {
  let component: TacheModalComponent;
  let fixture: ComponentFixture<TacheModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
