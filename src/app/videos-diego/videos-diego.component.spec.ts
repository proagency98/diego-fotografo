import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosDiegoComponent } from './videos-diego.component';

describe('VideosDiegoComponent', () => {
  let component: VideosDiegoComponent;
  let fixture: ComponentFixture<VideosDiegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosDiegoComponent]
    });
    fixture = TestBed.createComponent(VideosDiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
