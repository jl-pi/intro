import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../assets/bootstrap.min.css', './home.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
