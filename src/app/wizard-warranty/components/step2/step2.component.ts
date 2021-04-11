import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  @Input() initStep: number;
  @Output() stepChanged: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  stepMinus(): any {
    return this.stepChanged.emit(this.initStep - 1);
  }
  stepPlus(): any {
    return this.stepChanged.emit(this.initStep + 1);
  }
}
