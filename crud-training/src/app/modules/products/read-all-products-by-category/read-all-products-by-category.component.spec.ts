import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAllProductsByCategoryComponent } from './read-all-products-by-category.component';

describe('ReadAllProductsByCategoryComponent', () => {
  let component: ReadAllProductsByCategoryComponent;
  let fixture: ComponentFixture<ReadAllProductsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAllProductsByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAllProductsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
