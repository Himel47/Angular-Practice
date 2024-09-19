import { Component } from '@angular/core';
import { NoticeComponent } from "../../Components/notice/notice.component";
import { FormBaseComponent } from "../../Components/form-base/form-base.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NoticeComponent, FormBaseComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
form_title: string = 'Sign In';

}
