import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentricaDigitalMdsUkhFeComponent } from './centrica-digital-mds-ukh-fe.component';

describe('CentricaDigitalMdsUkhFeComponent', () => {
  let component: CentricaDigitalMdsUkhFeComponent;
  let fixture: ComponentFixture<CentricaDigitalMdsUkhFeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentricaDigitalMdsUkhFeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentricaDigitalMdsUkhFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
