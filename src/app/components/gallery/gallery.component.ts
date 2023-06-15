import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper, EffectCube } from 'swiper';
SwiperCore.use([Navigation, Pagination, EffectCube, A11y]);

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
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
  ];


}
