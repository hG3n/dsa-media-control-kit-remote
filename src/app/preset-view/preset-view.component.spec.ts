import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetViewComponent } from './preset-view.component';

describe('PresetViewComponent', () => {
  let component: PresetViewComponent;
  let fixture: ComponentFixture<PresetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
