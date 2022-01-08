import { formatCurrency, NgIf } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../../core/services/project/project.service';
import { BuildingService } from '../../../core/services/buildings/building.service';
import { AparmentService } from './../../../core/services/aparment/aparment.service';

import { ProjectModel } from '../../../core/models/project.model';
import { BuildingModel } from './../../../core/models/building.model';
import { AparmentModel } from './../../../core/models/aparment.model';
import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  loading = true;
  isInvalid = false;
  @Input() initStep: number;
  @Output() stepChanged: EventEmitter<{}> = new EventEmitter();
  step1Form: FormGroup;
  projects: ProjectModel[];
  selectedProject: ProjectModel;
  buildings: BuildingModel[];
  buildingSelect: BuildingModel;
  aparments: AparmentModel[];
  aparmentSelect: AparmentModel;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private buildingService: BuildingService,
    private aparmentService: AparmentService
  ) {
    this.stepForm();
    this.projectService.getAllProjects().subscribe((data) => {
      this.projects = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {}

  private stepForm(): any {
    this.step1Form = this.fb.group(
      {
        project: ['', Validators.required],
        build: ['', Validators.required],
        aparment: ['', Validators.required],
        aparmentCode: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(9),
          ],
        ],
      },
      { asyncValidators: MyValidators.validateAparment(this.aparmentService) }
    );
  }

  onChangeProject(event): void {
    this.loading = true;
    this.buildingService
      .getAllBuildingsByProjectsId(this.step1Form.value.project.id)
      .subscribe((data) => {
        this.buildings = data;
        this.loading = false;
      });
  }
  onChangeBuilding(event): void {
    this.loading = true;
    this.aparmentService
      .getAllBuildingsByProjectsId(this.step1Form.value.build.id)
      .subscribe((data) => {
        this.aparments = data;
        this.loading = false;
      });
  }

  // tslint:disable-next-line: typedef
  get aparmentCodeField() {
    return this.step1Form.get('aparmentCode');
  }

  saveStep(): any {
    if (this.step1Form.invalid) {
      return;
    }

    return this.stepChanged.emit({
      step: this.initStep + 1,
      infoStep1: this.step1Form.value,
    });
  }
}
