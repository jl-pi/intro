import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) { }

  transform(value: any): any {
    if (value && value.length > 0) {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }
    return value;
  }
}