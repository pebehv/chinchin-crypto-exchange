import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { WalletTableComponent } from '../wallet-table/wallet-table.component';
import { NgIf } from '@angular/common';
import { WalletCardComponent } from '../wallet-card/wallet-card.component';
import { WalletProgressBarComponent } from '../wallet-progress-bar/wallet-progress-bar.component';


@Component({
  selector: 'app-wallet-main',
  imports: [NavbarComponent, WalletTableComponent, NgIf, WalletCardComponent, WalletProgressBarComponent],
  templateUrl: './wallet-main.component.html',
  styleUrl: './wallet-main.component.scss'
})
export class WalletMainComponent {

}
