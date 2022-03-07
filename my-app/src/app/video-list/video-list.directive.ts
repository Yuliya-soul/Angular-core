import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appVideoListBold]',
})
export class VideoListDirective {
  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.fontWeight = 'bold';
  }
  private fontWeight = 'normal';

  @HostBinding('style.fontWeight') get getFontWeight() {
    return this.fontWeight;
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontWeight = 'normal';
  }
}
