import { Component, Input, OnInit, } from '@angular/core';
import { ICarouselItem } from './Icarousel-item-metadata';


@Component({
  selector: 'app-photo-slider-diego',
  templateUrl: './photo-slider-diego.component.html',
  styleUrls: ['./photo-slider-diego.component.scss']
})
export class PhotoSliderDiegoComponent implements OnInit {


  /**
   * Custom Properties
   */
  @Input() height = 800;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [];

  /**
   * Final Properties
   */

  public finalHeight: string | number = 0;
  public currentPosition: number = 0;

  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`
  }
  ngOnInit() {
    
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    })
  }
  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find((i) => i.id === 0)!.marginLeft = -100 * position;
    
  }

  setNext(){
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1){
      finalPercentage = -100 * nextPosition
    } else{
      nextPosition = 0;
    }
    this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = nextPosition; 
  }
  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0){
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
    this. currentPosition = backPosition;    
  }
  
}
