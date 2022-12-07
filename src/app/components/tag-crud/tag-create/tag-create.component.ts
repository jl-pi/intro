import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-create',
  templateUrl: './tag-create.component.html',
  styleUrls: ['./tag-create.component.scss']
})
export class TagCreateComponent {
  submitted: boolean = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private tagService: TagService
  ) { }

  tagForm = this.fb.group({
    name: ['', [Validators.required]],
    completed: ['', [Validators.required]],

  })


  get myForm() {
    return this.tagForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.tagForm.valid) {
      return false;
    } else {
      this.tagService.createTag(this.tagForm.value).subscribe(
        (res) => {
          console.log('Tag successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('blog/tag/list'))
        }, (error) => {
          console.log(error);
        });
    }
    return this.submitted;
  }
}