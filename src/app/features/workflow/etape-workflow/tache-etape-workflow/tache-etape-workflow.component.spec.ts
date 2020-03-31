import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheEtapeWorkflowComponent } from './tache-etape-workflow.component';

describe('TacheEtapeWorkflowComponent', () => {
  let component: TacheEtapeWorkflowComponent;
  let fixture: ComponentFixture<TacheEtapeWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheEtapeWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheEtapeWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
