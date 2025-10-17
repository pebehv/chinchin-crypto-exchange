import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletMainComponent } from './wallet-main.component';

describe('WalletMainComponent', () => {
  let component: WalletMainComponent;
  let fixture: ComponentFixture<WalletMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
