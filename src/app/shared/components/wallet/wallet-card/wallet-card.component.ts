import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
@Component({
  selector: 'app-wallet-card',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],
  templateUrl: './wallet-card.component.html',
  styleUrl: './wallet-card.component.scss'
})
export class WalletCardComponent {

}
