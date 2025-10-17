import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MarketTableComponent } from '../market-table/market-table.component';
import { NgIf } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { CryptoService, CryptoTicker } from '../../../../core/services/crypto.service';
import { interval, startWith, Subscription, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MarketModalComponent } from '../market-modal/market-modal.component';

@Component({
  selector: 'app-market-main',
  imports: [NavbarComponent, MarketTableComponent, NgIf, MatGridListModule],
  templateUrl: './market-main.component.html',
  styleUrl: './market-main.component.scss'
})
export class MarketMainComponent implements OnInit, OnDestroy {

  cryptos: CryptoTicker[] = [];
  loading = true;
  private dataSubscription: Subscription | undefined;
  constructor(private cryptoService: CryptoService
  ) { }
  ngOnInit() {
    //this.loadData();
    this.startDataRefresh();
  }

  ngOnDestroy(): void {
    //  ¡IMPORTANTE! Cancela la suscripción al destruir el componente
    // para evitar fugas de memoria y llamadas innecesarias.
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
  startDataRefresh() {
      // interval(30000) 
      this.dataSubscription = interval(30000)
        .pipe(
          startWith(0), 
          
          switchMap(() => {
            return this.cryptoService.getAllTickers();
          })
        )
        .subscribe({
          next: data => {
            this.cryptos = data.slice(0, 40);
            this.loading = false;
            console.log('Datos actualizados.');
          },
          error: err => {
            console.error('Error cargando criptos:', err);
            this.loading = false;
          }
        });
  }
  
   
}
