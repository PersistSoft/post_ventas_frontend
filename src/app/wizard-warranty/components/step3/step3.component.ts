import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
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
