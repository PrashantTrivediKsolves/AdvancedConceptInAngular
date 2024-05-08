import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBehaviorComponent } from './about-behavior.component';

describe('AboutBehaviorComponent', () => {
  let component: AboutBehaviorComponent;
  let fixture: ComponentFixture<AboutBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
