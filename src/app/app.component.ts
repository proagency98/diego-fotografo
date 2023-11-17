
import { Component } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from './data/constants/carousel.const';
import { ICarouselItem } from './photo-slider-diego/Icarousel-item-metadata';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  public carouselData : ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  title = 'diego-fotografo';
  
}
