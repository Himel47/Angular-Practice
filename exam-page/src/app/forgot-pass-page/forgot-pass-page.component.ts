import { Component } from '@angular/core';
import { ExamTitleComponent } from "../../Components/exam-title/exam-title.component";
import { ExamBodyComponent } from "../../Components/exam-body/exam-body.component";
import { FormBaseComponent } from "../../Components/form-base/form-base.component";

@Component({
  selector: 'app-forgot-pass-page',
  standalone: true,
  imports: [ExamTitleComponent, ExamBodyComponent, FormBaseComponent],
  templateUrl: './forgot-pass-page.component.html',
  styleUrl: './forgot-pass-page.component.css'
})
export class ForgotPassPageComponent {
  exam_name: string = 'Retrieve Password';
  forgot_page_title: string = '';
  form_title: string = 'Please enter your email address below.';

}
