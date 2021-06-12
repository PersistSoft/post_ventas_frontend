import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wizard-warranty',
  templateUrl: './wizard-warranty.component.html',
  styleUrls: ['./wizard-warranty.component.scss'],
})
export class WizardWarrantyComponent implements OnInit {
  step = 3;

  constructor() {}

  ngOnInit(): void {}

  changeStep($event): number {
    return (this.step = $event);
  }

  goToStep4($event): void {
    console.log($event);
  }
}
