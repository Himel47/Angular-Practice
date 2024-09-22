import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../Components/header/header.component";
import { FooterComponent } from "../Components/footer/footer.component";
import { NoticeComponent } from "../Components/notice/notice.component";
import { InstructionPageComponent } from "./instruction-page/instruction-page.component";
import { SideBarComponent } from "../Components/side-bar/side-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NoticeComponent,
    InstructionPageComponent,
    SideBarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exam-page';
}
