import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WarrantyTypeService } from './../../../core/services/warrantyType/warranty-type.service';
import { WarrantyTypeModule } from './../../../core/models/warranty-type.model';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { element } from 'protractor';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  @Input() initStep: number;
  @Output() stepChanged: EventEmitter<number> = new EventEmitter();
  warrantiesTypes: WarrantyTypeModule[];

  formStep3: FormGroup;

  // postVentasArray = new FormControl();

  constructor(
    private warrantyTypeService: WarrantyTypeService,
    private fb: FormBuilder
  ) {
    this.warrantyTypeService.getAll().subscribe((data) => {
      this.warrantiesTypes = data.map((el) => {
        const newElement = { ...el, checked: false };

        return newElement;
      });
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formStep3 = this.fb.group({
      warranties: this.fb.array([]),
      explanation: ['', Validators.required],
    });
  }

  get warrantiesArray(): FormArray {
    return this.formStep3.get('warranties') as FormArray;
  }

  isChecked(item): void {
    if (item.checked === false) {
      this.warrantiesArray.push(this.fb.control(item));
    } else {
      const arr = this.warrantiesArray.value;
      const index = arr.map((e) => e.id).indexOf(item.id);
      this.warrantiesArray.removeAt(index);
    }
    item.checked = !item.checked;
  }

  stepMinus(): any {
    return this.stepChanged.emit(this.initStep - 1);
  }
  stepPlus(): any {
    return this.stepChanged.emit(this.initStep + 1);
  }
}
