import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasicoVainilla } from './clasico-vainilla';

describe('ClasicoVainilla', () => {
  let component: ClasicoVainilla;
  let fixture: ComponentFixture<ClasicoVainilla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasicoVainilla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasicoVainilla);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
