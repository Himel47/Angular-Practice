import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../Components/header/header.component";
import { FooterComponent } from "../Components/footer/footer.component";
import { SidebarComponent } from "../Components/sidebar/sidebar.component";
import { NoticeComponent } from "../Components/notice/notice.component";
import { InstructionPageComponent } from "./instruction-page/instruction-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NoticeComponent,
    InstructionPageComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exam-page';
}
