import { Directive, Input, HostListener, Renderer, ElementRef } from '@angular/core';


@Directive({ selector: '[cid-hover-highlight]' })
export class CidHoverHighlightDirective {

    @Input("cid-hover-highlight")
    hoverClass: string;

    constructor(
        public elementRef: ElementRef,
        private renderer: Renderer
    ) { }

    @HostListener('mouseover') mouseover() {
        this.renderer.setElementClass(this.elementRef.nativeElement, this.hoverClass, true);
    }

    @HostListener('mouseout') mouseout() {
        this.renderer.setElementClass(this.elementRef.nativeElement, this.hoverClass, false);
    }
}