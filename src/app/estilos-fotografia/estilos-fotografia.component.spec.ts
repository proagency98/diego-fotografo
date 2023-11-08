import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosFotografiaComponent } from './estilos-fotografia.component';

describe('EstilosFotografiaComponent', () => {
  let component: EstilosFotografiaComponent;
  let fixture: ComponentFixture<EstilosFotografiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstilosFotografiaComponent]
    });
    fixture = TestBed.createComponent(EstilosFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
