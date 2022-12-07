import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-landing-portfolio',
  templateUrl: './landing-portfolio.component.html',
  styleUrls: ['./landing-portfolio.component.scss'],
})
export class LandingPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const slidesContainer = document.getElementById("slides-container")!;
    const slide = document.querySelector(".slide")!;
    const prevButton = document.getElementById("slide-arrow-prev")!;
    const nextButton = document.getElementById("slide-arrow-next")!;
    const slideWidth = slide.clientWidth;


    nextButton.addEventListener("click", () => {

      slidesContainer.scrollLeft += slideWidth;
      //  this.scrollAnimation();
    });

    prevButton?.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
      //  this.scrollAnimation();
    });


  }

  // scrollAnimation() {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       const square = entry.target.querySelector('.object-cover');

  //       if (entry.isIntersecting) {
  //         square?.classList.add('square-animation');
  //         return; // if we added the class, exit the function
  //       }

  //       // We're not intersecting, so remove the class!
  //       square?.classList.remove('square-animation');
  //     });
  //   });

  //   observer.observe(document.querySelector('.slider-wrapper')!);
  // }


}
