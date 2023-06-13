import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('container')
  container!: ElementRef;

  //booleans variables
  splash: boolean = true
  aboutus: boolean = false
  gallery: boolean = false
  community: boolean = false
  contactus: boolean = false
  activities: boolean = false

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  // addClass(el: any, name: string): void
  //removeClass(el: any, name: string): void
  changeBg(section: string) {

    if (section === "splash") {
      this.aboutus = false
      this.splash = true
      this.gallery = false
      this.contactus = false
      this.community = false
      this.activities = false
    }

    if (section === "aboutus") {
      this.aboutus = true
      this.splash = false
      this.gallery = false
      this.contactus = false
      this.community = false
      this.activities = false
    }

    if (section === "gallery") {
      this.aboutus = false
      this.splash = false
      this.gallery = true
      this.contactus = false
      this.community = false
      this.activities = false
    }

    if (section === "contactus") {
      this.aboutus = false
      this.splash = false
      this.gallery = false
      this.contactus = true
      this.community = false
      this.activities = false
    }

    if (section === "community") {
      this.aboutus = false
      this.splash = false
      this.gallery = false
      this.contactus = false
      this.community = true
      this.activities = false
    }

    if (section === "activities") {
      this.aboutus = false
      this.splash = false
      this.gallery = false
      this.contactus = false
      this.community = false
      this.activities = true
    }

  }

}
