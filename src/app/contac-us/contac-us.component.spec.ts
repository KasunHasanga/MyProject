import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacUsComponent } from './contac-us.component';

describe('ContacUsComponent', () => {
  let component: ContacUsComponent;
  let fixture: ComponentFixture<ContacUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
