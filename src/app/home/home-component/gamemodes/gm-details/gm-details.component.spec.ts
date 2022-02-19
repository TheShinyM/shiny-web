import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmDetailsComponent } from './gm-details.component';

describe('GmDetailsComponent', () => {
  let component: GmDetailsComponent;
  let fixture: ComponentFixture<GmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
