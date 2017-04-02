import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpcheckComponent } from './ipcheck.component';

describe('IpcheckComponent', () => {
  let component: IpcheckComponent;
  let fixture: ComponentFixture<IpcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
