import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KahramanlarComponent } from './kahramanlar.component';

describe('KahramanlarComponent', () => {
  let component: KahramanlarComponent;
  let fixture: ComponentFixture<KahramanlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KahramanlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KahramanlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
