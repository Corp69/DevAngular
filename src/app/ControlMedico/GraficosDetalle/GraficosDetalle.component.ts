import { Component } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { GraficoDetalleService } from './Services/GraficoDetalle.service';

@Component({
  selector: 'app-GraficosDetalle',
  templateUrl: './GraficosDetalle.component.html',
  styleUrls: ['./GraficosDetalle.component.scss']
})
export class GraficosDetalleComponent {
  constructor(
    //private fb: FormBuilder,
    private servicio: GraficoDetalleService
  ) {

    this.servicio._tablasServicios().subscribe(resp => {
      switch (resp.Detalle._app_Graficas_Titulo_X_Empleado) {
        case  null:
          break;
        default:
        //  this.tbDocVenta = resp.Detalle.tb_pacientes_por_fecha_limite;
        //  this.tbDocVenta_columns = Object.keys(this.tbDocVenta[0]);
          console.log(resp.Detalle);
        break;
      }  
    });

  }






  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['R1', 'R2', 'R3', 'R4', 'R5',],
    datasets: [{
      data: [20, 20, 20, 20, 20]
    }]
  };

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

}
