import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedVelvet } from './red-velvet';

describe('RedVelvet', () => {
  let component: RedVelvet;
  let fixture: ComponentFixture<RedVelvet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedVelvet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedVelvet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
