import { Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter } from '@angular/core';

import { default as HelloComponent } from './hello.component';
customElements.define('hello-component', HelloComponent);

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloWrapperComponent implements OnChanges, OnInit {

  @Input() buttonclass: string;
  @Input() bold: boolean;
  @Input() disabled: boolean;
  @Input() slot: string;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log('on init, hello component');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
