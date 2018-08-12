import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <cid-gallery [options]="{theme:'darker'}" [delay]="2500" theme="light" alignPageNav="right" imageWidth="640px" imageHeight="375px">
        <cid-gallery-item 
                title="Main House 1" 
                imageUrl="/assets/images/193px-Linden,_paysage.jpg" 
                thumbUrl="/assets/thumbs/193px-Linden,_paysage.jpg" >

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item >
        <cid-gallery-item 
                title="Main House 2"
                imageUrl="/assets/images/640px-Freudenberg_sg_Switzerland.jpg" 
                thumbUrl="/assets/thumbs/220px-Freudenberg_sg_Switzerland.jpg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item>
        <cid-gallery-item 
                title="Main House 3" 
                imageUrl="/assets/images/Peyto_Lake-Banff_NP-Canada.jpg" 
                thumbUrl="/assets/thumbs/Peyto_Lake-Banff_NP-Canada.jpg" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item>
<cid-gallery-item 
                title="Main House 1" 
                imageUrl="/assets/images/193px-Linden,_paysage.jpg" 
                thumbUrl="/assets/thumbs/193px-Linden,_paysage.jpg" >

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item >
        <cid-gallery-item 
                title="Main House 2"
                imageUrl="/assets/images/640px-Freudenberg_sg_Switzerland.jpg" 
                thumbUrl="/assets/thumbs/220px-Freudenberg_sg_Switzerland.jpg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item>
        <cid-gallery-item 
                title="Main House 3" 
                imageUrl="/assets/images/Peyto_Lake-Banff_NP-Canada.jpg" 
                thumbUrl="/assets/thumbs/Peyto_Lake-Banff_NP-Canada.jpg" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item>
       <cid-gallery-item 
                title="Main House 1" 
                imageUrl="/assets/images/193px-Linden,_paysage.jpg" 
                thumbUrl="/assets/thumbs/193px-Linden,_paysage.jpg" >

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item >
        <cid-gallery-item 
                title="Main House 2"
                imageUrl="/assets/images/640px-Freudenberg_sg_Switzerland.jpg" 
                thumbUrl="/assets/thumbs/220px-Freudenberg_sg_Switzerland.jpg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item>
        <cid-gallery-item 
                title="Main House 3" 
                imageUrl="/assets/images/Peyto_Lake-Banff_NP-Canada.jpg" 
                thumbUrl="/assets/thumbs/Peyto_Lake-Banff_NP-Canada.jpg" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item>
<cid-gallery-item 
                title="Main House 1" 
                imageUrl="/assets/images/193px-Linden,_paysage.jpg" 
                thumbUrl="/assets/thumbs/193px-Linden,_paysage.jpg" >

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item >
        <cid-gallery-item 
                title="Main House 2"
                imageUrl="/assets/images/640px-Freudenberg_sg_Switzerland.jpg" 
                thumbUrl="/assets/thumbs/220px-Freudenberg_sg_Switzerland.jpg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item>
        <cid-gallery-item 
                title="Main House 3" 
                imageUrl="/assets/images/Peyto_Lake-Banff_NP-Canada.jpg" 
                thumbUrl="/assets/thumbs/Peyto_Lake-Banff_NP-Canada.jpg" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lorem vitae enim 
            interdum luctus. Sed bibendum vel est eget commodo. Cras vehicula accumsan eros 
            blandit porttitor. Nullam in gravida felis. Proin interdum ac dolor porta tristique. 
            Quisque dignissim sem sit amet arcu egestas, eget sagittis turpis rutrum.
        </cid-gallery-item>
    </cid-gallery>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
