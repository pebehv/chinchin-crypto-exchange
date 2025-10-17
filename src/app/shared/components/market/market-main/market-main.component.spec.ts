import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketMainComponent } from './market-main.component';

describe('MarketMainComponent', () => {
  let component: MarketMainComponent;
  let fixture: ComponentFixture<MarketMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
