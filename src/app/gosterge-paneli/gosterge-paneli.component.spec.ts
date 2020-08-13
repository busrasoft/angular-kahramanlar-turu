import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GostergePaneliComponent } from './gosterge-paneli.component';

describe('GostergePaneliComponent', () => {
  let component: GostergePaneliComponent;
  let fixture: ComponentFixture<GostergePaneliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GostergePaneliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GostergePaneliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
