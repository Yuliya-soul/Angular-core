import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appVideoListBold]'
})
export class VideoListDirective {

  constructor(private elemRef:ElementRef) {   
    this.elemRef.nativeElement.style.fontWeight ='bold';

  }


}
