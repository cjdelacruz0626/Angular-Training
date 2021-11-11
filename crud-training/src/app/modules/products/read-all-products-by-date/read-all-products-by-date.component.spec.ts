import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAllProductsByDateComponent } from './read-all-products-by-date.component';

describe('ReadAllProductsByDateComponent', () => {
  let component: ReadAllProductsByDateComponent;
  let fixture: ComponentFixture<ReadAllProductsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAllProductsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAllProductsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
