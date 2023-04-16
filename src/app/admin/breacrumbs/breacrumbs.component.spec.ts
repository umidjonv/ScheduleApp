import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreacrumbsComponent } from './breacrumbs.component';

describe('BreacrumbsComponent', () => {
  let component: BreacrumbsComponent;
  let fixture: ComponentFixture<BreacrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreacrumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreacrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
