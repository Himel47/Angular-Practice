import { Component } from '@angular/core';
import { NoticeComponent } from "../../Components/notice/notice.component";
import { LoginComponent } from "../../Components/login/login.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NoticeComponent, LoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
