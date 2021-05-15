import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WarrantyTypeService } from './../../../core/services/warrantyType/warranty-type.service';
import { WarrantyTypeModule } from './../../../core/models/warranty-type.model';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  @Input() initStep: number;
  @Output() stepChanged: EventEmitter<number> = new EventEmitter();
  warrantiesTypes: WarrantyTypeModule[];

  constructor(private warrantyTypeService: WarrantyTypeService) {
    this.warrantyTypeService
      .getAll()
      .subscribe((data) => (this.warrantiesTypes = data));
  }

  ngOnInit(): void {}

  stepMinus(): any {
    return this.stepChanged.emit(this.initStep - 1);
  }
  stepPlus(): any {
    return this.stepChanged.emit(this.initStep + 1);
  }
}
