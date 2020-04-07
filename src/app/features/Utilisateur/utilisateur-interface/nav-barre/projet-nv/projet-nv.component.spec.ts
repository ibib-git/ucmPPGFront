import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetNvComponent } from './projet-nv.component';

describe('ProjetNvComponent', () => {
  let component: ProjetNvComponent;
  let fixture: ComponentFixture<ProjetNvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetNvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetNvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
