import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrolearningsComponent } from './microlearnings.component';

describe('MicrolearningsComponent', () => {
  let component: MicrolearningsComponent;
  let fixture: ComponentFixture<MicrolearningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrolearningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrolearningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
