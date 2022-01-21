import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSaveFormComponent } from './auto-save-form.component';

describe('AutoSaveFormComponent', () => {
  let component: AutoSaveFormComponent;
  let fixture: ComponentFixture<AutoSaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoSaveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
