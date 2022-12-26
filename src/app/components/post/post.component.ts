import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PostComponent implements OnInit {
  @Input() postName: string = '';
  constructor() {}

  ngOnInit(): void {
    console.log(this.postName);
  }
}
