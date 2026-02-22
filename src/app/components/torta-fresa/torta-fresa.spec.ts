import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortaFresa } from './torta-fresa';

describe('TortaFresa', () => {
  let component: TortaFresa;
  let fixture: ComponentFixture<TortaFresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TortaFresa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TortaFresa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
