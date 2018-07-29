import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css']
})
export class MainChartComponent implements OnInit {

  chart: any;
  public data: any;
  labels: string[] = [];
  values: number[] = [];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const token = localStorage.getItem('token');
    this.service.getRecords(token)
      .subscribe(
        resp => {
          this.data = resp['response'];
          this.data.forEach(element => {
            this.labels.push(element['date']);
            this.values.push(element['weight']);
          });
          this.generateChart();
        }
      );
  }

  generateChart() {
    this.chart = new Chart('canv', {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Weight',
          borderColor: '#C30054',
          borderWidth: 2,
          backgroundColor: '#C30054',
          fill: false,
          data: this.values,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      }
    });
  }
}
