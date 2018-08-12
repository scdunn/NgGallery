import { Component, Input } from '@angular/core';

@Component({
  selector: 'cid-gallery-item',
  template: `
    <div [hidden]="!isVisible">
      <div style="overflow:hidden;" [style.height]="imageHeight"  class="rounded">
        <img [src]="imageUrl" class="image-fluid" />
      </div>
      
      <div class="small">
      <ng-content></ng-content>
        </div>
    </div>
  `,
  styles: []
})
export class CidGalleryItemComponent {

 
    //is content visible
    isVisible: boolean;

    //title to display in parent header on card
    @Input() title: string = "";  
    @Input() imageUrl: string = "";
    @Input() thumbUrl: string = "";
    @Input() imageHeight: string;
    @Input() imageWidth: string;
    
}
