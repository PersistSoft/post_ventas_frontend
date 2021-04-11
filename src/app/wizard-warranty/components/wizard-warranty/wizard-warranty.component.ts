import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wizard-warranty',
  templateUrl: './wizard-warranty.component.html',
  styleUrls: ['./wizard-warranty.component.scss'],
})
export class WizardWarrantyComponent implements OnInit {
  constructor() {}

  step = 3;
  ngOnInit(): void {}

  changeStep($event): number {
    return (this.step = $event);
  }
}
