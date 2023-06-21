import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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

  toTop = 350;
  show = false

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }
  // addClass(el: any, name: string): void
  //removeClass(el: any, name: string): void

  changeBg(section: string) {
    if (section === 'splash') {
      this.className = 'bg-splash'
      this.hideMenu()

    }

    if (section === 'aboutus') {
      this.className = 'bg-aboutus'
      this.hideMenu()

    }

    if (section === 'gallery') {
      this.className = 'bg-gallery'
      this.hideMenu()
    }

    if (section === "contactus") {
      this.className = 'bg-contactus'
      this.hideMenu()

    }

    if (section === "community") {
      this.className = 'bg-community'
      this.hideMenu()

    }

    if (section === "activities") {
      this.className = 'bg-activities'
      this.hideMenu()

    }

  }

  addingClass() {
    return this.className
  }

  showMenu() {
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
    console.log("show menú");
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

    console.log('[scroll]', scrollPosition);

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
