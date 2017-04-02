import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdialogComponent } from './ipdialog.component';

describe('IpdialogComponent', () => {
  let component: IpdialogComponent;
  let fixture: ComponentFixture<IpdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
