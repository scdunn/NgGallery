import { Component, OnInit, Input } from '@angular/core';
import { CidGalleryComponent } from '../cid-gallery/cid-gallery.component';

@Component({
  selector: 'cid-gallery-thumbs',
  template: `
        <img [src]="item.thumbUrl" [class.bg-danger]="parent.current==i" cid-hover-highlight="bg-primary" *ngFor="let item of parent.items; let i = index" style="width:50px; height:50px" (click)="parent.setContentView(i);" class="img-thumbnail" />  
  `,
  styles: []
})
export class CidGalleryThumbsComponent implements OnInit {

  constructor() { }
    @Input() parent: CidGalleryComponent[];

  ngOnInit() {
  }

}
