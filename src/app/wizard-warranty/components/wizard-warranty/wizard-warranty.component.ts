import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wizard-warranty',
  templateUrl: './wizard-warranty.component.html',
  styleUrls: ['./wizard-warranty.component.scss'],
})
export class WizardWarrantyComponent implements OnInit {
  step = 1;
  infoStep1;
  infoStep2;

  constructor() {}

  ngOnInit(): void {}

  changeStep($event): number {
    this.infoStep1 = $event.infoStep1;
    return (this.step = $event.step);
  }
  changeStep2($event): number {
    this.infoStep2 = $event.step2contact;
    return (this.step = $event.step);
  }

  goToStep4($event): void {
    console.log($event);
  }
}
