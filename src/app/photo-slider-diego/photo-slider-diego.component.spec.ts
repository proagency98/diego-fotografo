import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSliderDiegoComponent } from './photo-slider-diego.component';

describe('PhotoSliderDiegoComponent', () => {
  let component: PhotoSliderDiegoComponent;
  let fixture: ComponentFixture<PhotoSliderDiegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoSliderDiegoComponent]
    });
    fixture = TestBed.createComponent(PhotoSliderDiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
