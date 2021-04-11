import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardWarrantyComponent } from './wizard-warranty.component';

describe('WizardWarrantyComponent', () => {
  let component: WizardWarrantyComponent;
  let fixture: ComponentFixture<WizardWarrantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardWarrantyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
