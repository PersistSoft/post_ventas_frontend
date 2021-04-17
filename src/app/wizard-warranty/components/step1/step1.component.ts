import { formatCurrency, NgIf } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../../core/services/project/project.service';
import { BuildingService } from '../../../core/services/buildings/building.service';
import { AparmentService } from './../../../core/services/aparment/aparment.service';

import { ProjectModel } from '../../../core/models/project.model';
import { BuildingModel } from './../../../core/models/building.model';
import { AparmentModel } from './../../../core/models/aparment.model';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  isInvalid = false;
  @Input() initStep: number;
  @Output() stepChanged: EventEmitter<number> = new EventEmitter();
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
    });
  }

  ngOnInit(): void {}

  private stepForm(): any {
    this.step1Form = this.fb.group({
      project: ['', Validators.required],
      build: ['', Validators.required],
      aparment: ['', Validators.required],
    });
  }

  onChangeProject(event): void {
    this.buildingService
      .getAllBuildingsByProjectsId(this.step1Form.value.project.id)
      .subscribe((data) => (this.buildings = data));
  }
  onChangeBuilding(event): void {
    this.aparmentService
      .getAllBuildingsByProjectsId(this.step1Form.value.build.id)
      .subscribe((data) => {
        this.aparments = data;
      });
  }

  saveStep(): any {
    if (this.step1Form.invalid) {
      this.isInvalid = true;
      return;
    }
    console.log(this.step1Form.value);
    return this.stepChanged.emit(this.initStep + 1);
  }
}
