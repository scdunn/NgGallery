import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CidGalleryComponent } from './components/cid-gallery/cid-gallery.component';
import { CidGalleryItemComponent } from './components/cid-gallery-item/cid-gallery-item.component';
import { CidHoverHighlightDirective } from './directives/cid-hover-highlight.directive';
import { CidGalleryThumbsComponent } from './components/cid-gallery-thumbs/cid-gallery-thumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    CidGalleryComponent,
      CidGalleryItemComponent,
    CidHoverHighlightDirective,
    CidGalleryThumbsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
