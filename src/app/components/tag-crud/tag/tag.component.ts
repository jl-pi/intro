import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag.model';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() tag_content: Tag | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.tag_content)
  }

}
