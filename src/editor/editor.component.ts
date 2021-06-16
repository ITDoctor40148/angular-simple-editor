import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class Editor implements OnInit {
  @Output() valueChange = new EventEmitter();

  ngOnInit(): void {
    document.execCommand('styleWithCSS', false, undefined);
  }

  exec(a: string, b = undefined): void {
    document.execCommand(a, false, b);
  }

  print(): void {
    window.print();
  }

  onInput(newValue: Event): void {
    this.valueChange.emit(newValue.target);
  }
}
