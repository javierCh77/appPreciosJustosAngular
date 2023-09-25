import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaSelectComponent } from './provincia-select.component';

describe('ProvinciaSelectComponent', () => {
  let component: ProvinciaSelectComponent;
  let fixture: ComponentFixture<ProvinciaSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciaSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinciaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
