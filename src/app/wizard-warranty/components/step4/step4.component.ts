import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss'],
})
export class Step4Component implements OnInit {
  @Input() initStep: number;
  @Output() stepChanged: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
