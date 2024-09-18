import { Component } from '@angular/core';
import { InstruntionPageHeaderComponent } from "../../Components/instruntion-page-header/instruntion-page-header.component";
import { InstruntionPageBodyComponent } from "../../Components/instruntion-page-body/instruntion-page-body.component";

@Component({
  selector: 'instruction-page',
  standalone: true,
  imports: [
    InstruntionPageHeaderComponent,
    InstruntionPageBodyComponent
  ],
  templateUrl: './instruction-page.component.html',
  styleUrl: './instruction-page.component.css'
})
export class InstructionPageComponent {

}
