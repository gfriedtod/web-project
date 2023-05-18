import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonNavBarComponent } from './boutton-nav-bar.component';

describe('BouttonNavBarComponent', () => {
  let component: BouttonNavBarComponent;
  let fixture: ComponentFixture<BouttonNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BouttonNavBarComponent]
    });
    fixture = TestBed.createComponent(BouttonNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
