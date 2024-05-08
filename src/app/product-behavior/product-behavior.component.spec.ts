import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBehaviorComponent } from './product-behavior.component';

describe('ProductBehaviorComponent', () => {
  let component: ProductBehaviorComponent;
  let fixture: ComponentFixture<ProductBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
