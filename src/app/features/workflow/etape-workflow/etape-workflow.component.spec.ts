import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeWorkflowComponent } from './etape-workflow.component';

describe('EtapeWorkflowComponent', () => {
  let component: EtapeWorkflowComponent;
  let fixture: ComponentFixture<EtapeWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapeWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapeWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
