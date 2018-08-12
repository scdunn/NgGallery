import { Component, OnInit, AfterContentInit, QueryList, Input,ContentChildren } from '@angular/core';
import { CidGalleryItemComponent } from '../cid-gallery-item/cid-gallery-item.component';

@Component({
  selector: 'cid-gallery',
    template: `
<div  class="col-md-6 col-sm-10">
  <div class="card" [ngClass]="themeClasses" >
    <div class="card-header">{{title}}&nbsp;</div>
    <div class="card-body">
    <ng-content></ng-content>
    </div>
    <div class="card-footer">
    <cid-gallery-thumbs [parent]="self"></cid-gallery-thumbs>
    </div>
    </div>
</div>
  `,
  styles: []
})
export class CidGalleryComponent implements OnInit, AfterContentInit {
    //delay for set interval content switch
    @Input() delay: number = 500;
    //dark or light theme
    @Input() theme: string = "light";
    //page nav alignment
    @Input() alignPageNav: string = "left";

    @Input() imageWidth: string;
    @Input() imageHeight: string;

    @Input() options: CidGalleryOptions = new CidGalleryOptions();

    //list of all content rotator content children
    @ContentChildren(CidGalleryItemComponent) children: QueryList<CidGalleryItemComponent>;

    //get reference for gallery to pass to child components (ie thumbs)
    get self(): CidGalleryComponent { return this;}

    //array of content rotator items
    private items: CidGalleryItemComponent[];

    //total count of items
    private count: number = 0;

    //index of current item
    private current: number = 0;
    //title of current item
    private title: string;

    //display classes
    private themeClasses: string;
    private pageClass: string;

    ngOnInit() {

        if (this.options instanceof CidGalleryOptions)
            console.log(this.options.theme);
        else
            console.log(typeof this.options);
        
        //card themeing
        switch (this.theme) {
            case "dark":
                this.themeClasses = "bg-dark text-white";
                break;
            default:
                this.themeClasses = "bg-light text-dark";
                break;
        }

        //align page navigation left(default, right, or center)
        switch (this.alignPageNav) {
            case "center":
                this.pageClass = "justify-content-center";
                break;
            case "right":
                this.pageClass = "justify-content-end";
                break;
            default:
                this.pageClass = "";
                break;
        }

    }

    //after content children have been loaded
    ngAfterContentInit() {
        //get content items and set initial view
        this.items = this.children.toArray();
        this.count = this.items.length - 1;
        this.setContentView(0);

        //init looping every [delay] ms and increment active content
        setInterval(() => {
            let index = this.current;
            if (index >= this.count)
                index = -1;
            this.setContentView(++index);

        }, this.delay);

    }

    //set the active content to show by index
    private setContentView(index: number) {
        this.current = index;
        this.items.forEach((item) => item.isVisible = false);
        let currentItem = this.items[index];

        currentItem.imageHeight = this.imageHeight;
        currentItem.imageWidth = this.imageWidth;
        
        currentItem.isVisible = true;
        this.title = currentItem.title;
    }

}

export class CidGalleryOptions {
    theme: string;
}
