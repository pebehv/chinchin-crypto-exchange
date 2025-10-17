import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CryptoService } from '../../../../core/services/crypto.service';
import { ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-market-modal',
  imports: [],
  templateUrl: './market-modal.component.html',
  styleUrl: './market-modal.component.scss'
})
export class MarketModalComponent implements OnInit {
  lineChartData: any; // Configuración de la gráfica
  cryptoData: any; // Configuración de la gráfica
  public chart: any;
  constructor( private cryptoService: CryptoService,
  public dialogRef: MatDialogRef<MarketModalComponent>) {}

  ngOnInit(): void {
    this.obtenerYProcesarData();
    //this.createChart();
  }
  closeDialog(): void {
    this.dialogRef.close(false);
  }

obtenerYProcesarData() {
  this.cryptoService.getHistoricalData('BTCUSDT', 30).subscribe({
    next: data => {
      this.cryptoData = data;
      const dataProcesada = this.procesarKlines(data);
      // Llama a createChart con los datos procesados
      this.createChart(dataProcesada.etiquetasFechas, dataProcesada.preciosCierre);
    },
    error: err => {
      console.error('Fallo al obtener historial:', err);
    }
  });
}

  /**
   * Transforma el array de arrays de Binance en arrays de etiquetas y valores.
   * @param klines El array de arrays devuelto por la API de Binance.
   */
  private procesarKlines(klines: any[]) {
    const etiquetasFechas: string[] = [];
    const preciosCierre: number[] = [];

    klines.forEach(kline => {
      // 0: Open time (Timestamp)
      const openTime = kline[0];
      // 4: Close price (Precio de cierre)
      const closePrice = parseFloat(kline[4]); 

      // Convertir el timestamp (milisegundos) a una fecha legible (ej: 10/16)
      const date = new Date(openTime);
      const formattedDate = (date.getMonth() + 1) + '/' + date.getDate(); 

      etiquetasFechas.push(formattedDate);
      preciosCierre.push(closePrice);
    });

    return { etiquetasFechas, preciosCierre };
  }

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 30000, // Ajusta el mínimo para que se parezca a la escala de $30k de tu imagen
        max: 60000, // Ajusta el máximo para que se parezca a la escala de $60k de tu imagen
        ticks: {
          callback: function(value, index, values) {
            // Formato para mostrar $30k, $45k, etc.
            return '$' + (value as number) / 1000 + 'k'; 
          }
        }
      },
      x: {
        // Asegúrate de que las etiquetas se muestren correctamente
      }
    },
    plugins: {
      legend: {
        display: false // Oculta la leyenda
      }
    }
  };


createChart(labels: string[], data: number[]) {
  if (this.chart) {
    this.chart.destroy(); // Destruye el gráfico anterior si existe
  }
  this.chart = new Chart("MyChart", {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: "Precio",
          data: data,
          fill: 'origin',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: '#36a2eb',
          tension: 0.4,
          pointRadius: 0
        }
      ]
    },
    options: this.lineChartOptions
  });
}

}
