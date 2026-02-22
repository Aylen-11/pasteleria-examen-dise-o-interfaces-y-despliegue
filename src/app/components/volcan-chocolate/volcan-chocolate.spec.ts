import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolcanChocolate } from './volcan-chocolate';

describe('VolcanChocolate', () => {
  let component: VolcanChocolate;
  let fixture: ComponentFixture<VolcanChocolate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolcanChocolate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolcanChocolate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
