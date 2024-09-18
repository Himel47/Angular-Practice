import { Component } from '@angular/core';

@Component({
  selector: 'instruntion-body',
  standalone: true,
  imports: [],
  templateUrl: './instruntion-page-body.component.html',
  styleUrl: './instruntion-page-body.component.css'
})
export class InstruntionPageBodyComponent {
exam_date: string = 'Saturday, 24 August 2024';
exam_time: string = '11:00 AM';

}
