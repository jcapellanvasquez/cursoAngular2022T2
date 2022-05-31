import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoFormApiComponent } from './nuevo-form-api.component';

describe('NuevoFormApiComponent', () => {
  let component: NuevoFormApiComponent;
  let fixture: ComponentFixture<NuevoFormApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoFormApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoFormApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
