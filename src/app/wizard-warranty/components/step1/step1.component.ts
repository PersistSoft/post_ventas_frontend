import { formatCurrency, NgIf } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../../core/services/project/project.service';
import { BuildingService } from '../../../core/services/buildings/building.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  projects;
  buildings;
  aparments;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private buildingService: BuildingService
  ) {
    this.stepForm();
    this.projectService.getAllProjects().subscribe((data) => {
      console.log(data);
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

  onChangeProject(idProject: number) {
    this.buildingService
      .getAllBuildingsByProjectsId(idProject)
      .subscribe((data) => {
        console.log(data[0]);
        return (this.buildings = data);
      });
  }

  saveStep(): any {
    // if (this.step1Form.invalid) {
    //   Object.values(this.step1Form.controls).forEach((control) => {
    //     control.markAsTouched();
    //     console.log(this.step1Form.invalid, this.step1Form.touched);
    //   });
    //   return;
    // }
    // if (this.step1Form.invalid) {
    //   this.isInvalid = true;
    //   return;
    // }
    return this.stepChanged.emit(this.initStep + 1);
  }
}
