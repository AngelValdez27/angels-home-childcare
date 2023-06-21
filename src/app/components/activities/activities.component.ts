import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper, EffectCube } from 'swiper';
SwiperCore.use([Navigation, Pagination, EffectCube, A11y]);

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  slides = [
    {
     
      image: '../../../assets/images/gallery/1.webp',
    },
    {
     
      image: '../../../assets/images/gallery/3.webp',
    },
    {
      
      image: '../../../assets/images/gallery/4.webp',
    },
    {
      
      image: '../../../assets/images/gallery/5.webp',
    },
    {
      
      image: '../../../assets/images/gallery/6.webp',
    },
    {
      
      image: '../../../assets/images/gallery/13.webp',
    },
    
  ];

  slides_first = [
   
    {
      
      image: '../../../assets/images/gallery/7.webp',
    },
    {
      
      image: '../../../assets/images/gallery/8.webp',
    },
    {
      
      image: '../../../assets/images/gallery/9.webp',
    },
    {
      
      image: '../../../assets/images/gallery/10.webp',
    },
    {
      
      image: '../../../assets/images/gallery/11.webp',
    },
    {
      
      image: '../../../assets/images/gallery/12.webp',
    },
  ];


  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

}
 