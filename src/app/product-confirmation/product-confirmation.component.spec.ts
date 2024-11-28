import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConfirmationComponent } from './product-confirmation.component';

describe('ProductConfirmationComponent', () => {
  let component: ProductConfirmationComponent;
  let fixture: ComponentFixture<ProductConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
