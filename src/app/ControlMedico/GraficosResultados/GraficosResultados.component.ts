import { Component } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { GraficoService } from './Services/Grafico.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-GraficosResultados',
  templateUrl: './GraficosResultados.component.html',
  styleUrls: ['./GraficosResultados.component.scss']
})
export class GraficosResultadosComponent {

  public data: any;
  public Titulo: any;
  public Descripcion: any;
  public Observaciones: any;
  public observacionesHTML: any;


  constructor(
    //private fb: FormBuilder,
    private servicio: GraficoService,
    private sanitizer: DomSanitizer
  ) {

    this.servicio._tablasServicios().subscribe(resp => {
      switch (resp.Detalle._app_Graficas_Titulo_X_Empleado) {
        case  null:
          break;
        default:
        //  this.tbDocVenta = resp.Detalle.tb_pacientes_por_fecha_limite;
        //  this.tbDocVenta_columns = Object.keys(this.tbDocVenta[0]);
        this.data = resp.Detalle._app_graficas_titulo_x_empleado;
          console.log(this.data);
        break;
      }  
    });

  }

  ngOnInit(): void {
    this.observacionesHTML = this.sanitizer.bypassSecurityTrustHtml('');
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