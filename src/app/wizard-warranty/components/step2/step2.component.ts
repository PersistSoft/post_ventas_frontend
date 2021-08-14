import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientModel } from 'src/app/core/models/client.model';
import { ClientService } from 'src/app/core/services/client/client.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  @Input() initStep: number;
  @Output() stepChanged: EventEmitter<{}> = new EventEmitter();
  step2Form: FormGroup;
  client: ClientModel = new ClientModel();

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.stepForm();
  }

  ngOnInit(): void {}

  get nameInvalid(): boolean {
    return (
      this.step2Form.get('name').invalid && this.step2Form.get('name').touched
    );
  }
  get emailInvalid(): boolean {
    return (
      this.step2Form.get('email').invalid && this.step2Form.get('email').touched
    );
  }
  get phoneInvalid(): boolean {
    return (
      this.step2Form.get('phone').invalid && this.step2Form.get('phone').touched
    );
  }
  get dataControllerInvalid(): boolean {
    if (
      !this.step2Form.value.dataController &&
      this.step2Form.get('phone').touched
    ) {
      return true;
    }
  }

  private stepForm(): any {
    this.step2Form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(`[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$`),
        ],
      ],
      phone: ['', [Validators.required, Validators.min(10)]],
      dataController: ['', Validators.required],
    });
  }
  stepMinus(): any {
    return this.stepChanged.emit(this.initStep - 1);
  }
  // createClient(): void {
  //   this.client.name = this.step2Form.value.name;
  //   this.client.email = this.step2Form.value.email;
  //   this.client.phone = this.step2Form.value.phone;
  //   this.client.dataController = this.step2Form.value.dataController;
  //   this.clientService
  //     .createClient(this.client)
  //     .subscribe((res: ClientModel) => {
  //       this.client.id = res.id;
  //     });
  // }
  stepPlus(): any {
    if (this.step2Form.invalid) {
      Object.values(this.step2Form.controls).forEach((control) => {
        control.markAsTouched();
        return;
      });
    } else {
      return this.stepChanged.emit({
        step: this.initStep + 1,
        step2contact: this.step2Form.value,
      });
    }
  }
}
