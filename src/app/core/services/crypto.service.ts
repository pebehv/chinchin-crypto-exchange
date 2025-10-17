import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface opcional para tipar la respuesta
export interface CryptoTicker {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
  volume: string;
  quoteVolume: string;
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.binance.com/api/v3/ticker/24hr';
  private apiUrl_history = 'https://api.binance.com/api/v3/klines';


  constructor(private http: HttpClient) {}

  /**
   * Obtiene la información de todas las criptomonedas (24h)
   */
  getAllTickers(): Observable<CryptoTicker[]> {
    return this.http.get<CryptoTicker[]>(this.apiUrl);
  }

  /**
   * Obtiene los datos de una criptomoneda específica (por símbolo)
   * Ejemplo: BTCUSDT
   */
  getTicker(symbol: string): Observable<CryptoTicker> {
    return this.http.get<CryptoTicker>(`${this.apiUrl}?symbol=${symbol}`);
  }

// crypto.service.ts (Esta función ya la teníamos)
  getHistoricalData(symbol: string, days: number = 7): Observable<any> {
      const interval = '1d'; 
      const params = {
        symbol: symbol.toUpperCase(), 
        interval: interval,
        limit: days.toString()
      };
      return this.http.get<any>(this.apiUrl_history, { params });
  }
}
