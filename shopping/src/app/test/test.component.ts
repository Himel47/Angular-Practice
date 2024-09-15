import { Component, EventEmitter, output, Output } from '@angular/core';
import { Test2Component } from './test2/test2.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [Test2Component],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  // onNameChange = output<string>()

  // showNewName(newName: string) {
  //   this.onNameChange.emit(newName);
  // }
  // @Output() panelClosed = new EventEmitter<void>();
}
