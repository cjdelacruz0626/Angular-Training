import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAllProductsComponent } from './read-all-products.component';

describe('ReadAllProductsComponent', () => {
  let component: ReadAllProductsComponent;
  let fixture: ComponentFixture<ReadAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAllProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
