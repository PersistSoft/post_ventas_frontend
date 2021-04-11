import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  @Input() initStep: number;
  @Output() stepChanged: EventEmitter<number> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  stepPlus(): any {
    return this.stepChanged.emit(this.initStep + 1);
  }
}
