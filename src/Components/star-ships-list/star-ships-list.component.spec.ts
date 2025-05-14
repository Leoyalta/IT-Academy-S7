import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarShipsListComponent } from './star-ships-list.component';

describe('StarShipsListComponent', () => {
  let component: StarShipsListComponent;
  let fixture: ComponentFixture<StarShipsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarShipsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarShipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
