import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  bdjobs_mail: string = 'mtb@bdjobs.com';
  footer_image: string = 'images/mtb_logo.jpg';
  bgColor: string = '';
}
