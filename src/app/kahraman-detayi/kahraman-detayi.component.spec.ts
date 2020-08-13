import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KahramanDetayiComponent } from './kahraman-detayi.component';

describe('KahramanDetayiComponent', () => {
  let component: KahramanDetayiComponent;
  let fixture: ComponentFixture<KahramanDetayiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KahramanDetayiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KahramanDetayiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
