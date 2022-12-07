import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['../../../assets/tailwind.min.css', './landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
    const options = {
      strings: [
        "Stay curious, Keep sane",
        "Stay curious, Keep sane",
        "Stay curious, Keep sane",

      ],

      typeSpeed: 20,
      startDelay: 100,
      loopCount: 3,
      loop: true,
    };

    const typed = new (<any>window).Typed('#typed', options);





  }

}
