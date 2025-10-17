import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletProgressBarComponent } from './wallet-progress-bar.component';

describe('WalletProgressBarComponent', () => {
  let component: WalletProgressBarComponent;
  let fixture: ComponentFixture<WalletProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletProgressBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
