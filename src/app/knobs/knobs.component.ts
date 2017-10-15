import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-knobs',
  templateUrl: './knobs.component.html'
})
export class KnobsComponent implements OnChanges, OnInit {

  @Input() text;
  @Input() price;
  @Input() border;
  @Input() fruit;
  @Input() name;
  @Input() items;
  @Input() today;
  @Input() stock;
  @Input() nice;

  constructor() { }

  ngOnInit(): void {
    console.log('on init, knobs component');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
