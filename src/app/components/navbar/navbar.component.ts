import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavbarServiceService } from 'src/app/services/navbar-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  href: string = "";
  hostlocal: string = ""

  //DOM variables
  @ViewChild('container')
  container!: ElementRef;
  @ViewChild('arrow_right') arrow_right!: ElementRef
  @ViewChild('arrow_left') arrow_left!: ElementRef
  @ViewChild('arrow_top') arrow_top!: ElementRef

  //classname
  className = ""

  //booleans variables
  splash: boolean = true
  aboutus: boolean = false
  gallery: boolean = false
  community: boolean = false
  contactus: boolean = false
  activities: boolean = false
  redirect: boolean = false

  toTop = 350;
  show = false

  constructor(private renderer: Renderer2, private navbarService: NavbarServiceService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.redirect = false
    //servicio para mandar parametro de otro componente no hijo a este componente, cambio de booleano para el navbar
    this.navbarService.variable.subscribe(r => {
      this.className = r
      //console.log("nombre de clase_ ", this.className);
    })


    this.href = window.location.href; //path complete
    this.hostlocal = window.location.host //host path
    //console.log("href", this.href);
    let parsedUrl = new URL(window.location.href);
    let baseUrl = parsedUrl.origin;
    //console.log(baseUrl);

    /* if (this.href == `http://${this.hostlocal}/gallery`) {
      this.className = 'bg-gallery'
    } */

    //TODO: CAMBIAR A HTTPS AL SUBIR AL SERVIDOR
    if (this.href == `${baseUrl}/splash`) {
      this.className = 'bg-splash'
    }
    if (this.href == `${baseUrl}/about-us`) {
      this.className = 'bg-aboutus'
    }
    if (this.href == `${baseUrl}/gallery`) {
      this.className = 'bg-gallery'
    }
    if (this.href == `${baseUrl}/contact-us`) {
      this.className = 'bg-contactus'
    }
    if (this.href == `${baseUrl}/community`) {
      this.className = 'bg-community'
    }
    if (this.href == `${baseUrl}/activities`) {
      this.className = 'bg-activities'
    }
  }
  // addClass(el: any, name: string): void
  //removeClass(el: any, name: string): void

  changeBg(section: string) {
    if (section === 'splash') {
      this.className = 'bg-splash'
      if (this.redirect == true) {
        this.hideMenu()
      }
      /* this.className = 'bg-splash'
      if (this.redirect == true) {
        this.hideMenu()
      } */
    }

    if (section === 'aboutus') {
      this.className = 'bg-aboutus'
      if (this.redirect == true) {
        this.hideMenu()
      }
    }

    if (section === 'gallery') {
      this.className = 'bg-gallery'
      if (this.redirect == true) {
        this.hideMenu()
      }
    }

    if (section === "contactus") {
      this.className = 'bg-contactus'
      if (this.redirect == true) {
        this.hideMenu()
      }

    }

    if (section === "community") {
      this.className = 'bg-community'
      if (this.redirect == true) {
        this.hideMenu()
      }
    }

    if (section === "activities") {
      this.className = 'bg-activities'
      if (this.redirect == true) {
        this.hideMenu()
      }
    }

  }

  addingClass() {
    return this.className
  }

  showMenu() {
    this.redirect = true
    console.log("show menú");
    this.renderer.removeStyle(this.container.nativeElement, 'transform')
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(0.5%)')
    //this.renderer.addClass(this.container.nativeElement, 'animate__bounceInLeft')
    // this.renderer.removeClass(this.container.nativeElement, 'animate__bounceOutLeft')
    this.renderer.removeClass(this.arrow_right.nativeElement, 'animate__flipInX')
    this.renderer.removeClass(this.arrow_left.nativeElement, 'animate__flipOutX')
    this.renderer.addClass(this.arrow_right.nativeElement, 'animate__flipOutX')
    this.renderer.addClass(this.arrow_left.nativeElement, 'animate__flipInX')
  }

  hideMenu() {
    this.redirect = false
    console.log("show menú", this.redirect);
    this.renderer.removeStyle(this.container.nativeElement, 'transform')
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(-100%)')
    //this.renderer.removeClass(this.container.nativeElement, 'animate__bounceInLeft')
    //this.renderer.addClass(this.container.nativeElement, 'animate__bounceOutLeft')
    this.renderer.removeClass(this.arrow_right.nativeElement, 'animate__flipOutX')
    this.renderer.removeClass(this.arrow_left.nativeElement, 'animate__flipInX')
    this.renderer.addClass(this.arrow_right.nativeElement, 'animate__flipInX')
    this.renderer.addClass(this.arrow_left.nativeElement, 'animate__flipOutX')
  }

  //Go to top Window
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    let scrollPosition =
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    //console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.toTop) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  // TODO: Cross browsing
  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  up() {
    console.log("up");
    this.renderer.setStyle(this.container.nativeElement, 'scroll-behavior', 'smooth')
  }

}
