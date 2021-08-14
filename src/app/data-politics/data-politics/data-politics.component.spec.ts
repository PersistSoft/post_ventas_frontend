import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPoliticsComponent } from './data-politics.component';

describe('DataPoliticsComponent', () => {
  let component: DataPoliticsComponent;
  let fixture: ComponentFixture<DataPoliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPoliticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
