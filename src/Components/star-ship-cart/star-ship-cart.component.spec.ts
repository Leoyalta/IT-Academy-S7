import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarShipCartComponent } from './star-ship-cart.component';

describe('StarShipCartComponent', () => {
  let component: StarShipCartComponent;
  let fixture: ComponentFixture<StarShipCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarShipCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarShipCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
