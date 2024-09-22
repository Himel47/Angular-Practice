import { Component } from '@angular/core';
import { ExamTitleComponent } from "../../Components/exam-title/exam-title.component";
import { ExamBodyComponent } from "../../Components/exam-body/exam-body.component";

@Component({
  selector: 'instruction-page',
  standalone: true,
  imports: [
    ExamTitleComponent,
    ExamBodyComponent
  ],
  templateUrl: './instruction-page.component.html',
  styleUrl: './instruction-page.component.css'
})
export class InstructionPageComponent {
  exam_name: string = 'Online Aptitude Test for Customer Service Executive';
  exam_duration: number =25;
  exam_date: string = 'Saturday, 24 August 2024';
  exam_time: string = '11:00 AM';

}
