import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag.model';
import { TagService } from 'src/app/services/tag.service';


@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  tags: Tag[] = [];


  constructor(private tagService: TagService) {

  }

  ngOnInit(): void {

    this.tagService.getAll().subscribe(
      (data: Tag[]) => {
        this.tags = data;
      }

    );







  }

}
