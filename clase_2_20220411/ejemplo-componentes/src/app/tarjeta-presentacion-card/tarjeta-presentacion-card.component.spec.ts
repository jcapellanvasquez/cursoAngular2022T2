import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPresentacionCardComponent } from './tarjeta-presentacion-card.component';

describe('TarjetaPresentacionCardComponent', () => {
  let component: TarjetaPresentacionCardComponent;
  let fixture: ComponentFixture<TarjetaPresentacionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPresentacionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPresentacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
