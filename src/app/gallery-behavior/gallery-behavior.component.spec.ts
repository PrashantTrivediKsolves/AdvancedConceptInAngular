import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBehaviorComponent } from './gallery-behavior.component';

describe('GalleryBehaviorComponent', () => {
  let component: GalleryBehaviorComponent;
  let fixture: ComponentFixture<GalleryBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
