import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagCreateComponent } from './tag-create/tag-create.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { TagListComponent } from './tag-list/tag-list.component';

const routes: Routes = [
  { path: 'list', component: TagListComponent },
  { path: 'create', component: TagCreateComponent },
  { path: 'edit/:id', component: TagEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagRoutingModule { }
