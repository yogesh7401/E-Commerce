import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardSkeletonComponent } from './product-card-skeleton.component';

describe('ProductCardSkeletonComponent', () => {
  let component: ProductCardSkeletonComponent;
  let fixture: ComponentFixture<ProductCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
