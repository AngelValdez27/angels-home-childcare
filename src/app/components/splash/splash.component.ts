import { Component, OnInit, HostListener, ElementRef, Renderer2, ViewChild } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper, EffectCube } from 'swiper';
SwiperCore.use([Navigation, Pagination, EffectCube, A11y]);
import { NavbarServiceService } from 'src/app/services/navbar-service.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {


  className = ""

  show: boolean | undefined;
  toTop = 100;


  constructor(private navbarService: NavbarServiceService) { }

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
      link: 'https://www.google.com',
      image: 'assets/1.jpg',
    },
    {
      link: 'https://www.youtube.com',
      image: 'assets/2.jpg',
    },
    {
      link: 'https://www.facebook.com',
      image: 'assets/3.jpg',
    },
  ];

  //Go to top Window



  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  //redirect

  changeBg(section: string) {
    if (section === 'splash') {
      this.className = 'bg-splash'
      this.navbarService.variable.next('bg-aboutus')

    }
  }

  addingClass() {
    this.navbarService.variable.next('bg-aboutus')
  }

}
