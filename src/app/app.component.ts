import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('slick') slick!: any;
  index = 0;
  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };


  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
  }

  breakpoint(e: any) {
  }

  afterChange(e: any) {
    // this.index += 1;
  }

  beforeChange(e: any) {
    this.index = e.nextSlide;
  }
  changeImage(event: any) {
    this.slick
    this.index = +event.target.id;
  }
}
