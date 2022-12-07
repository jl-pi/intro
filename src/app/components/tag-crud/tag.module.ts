import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TagCreateComponent } from './tag-create/tag-create.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { TagComponent } from './tag/tag.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagRoutingModule } from './tag-routing.module';

@NgModule({
  declarations: [TagComponent, TagListComponent, TagCreateComponent, TagEditComponent],
  imports: [
    CommonModule,
    TagRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    TagListComponent
  ]
})
export class TagModule { }
