import { Component, OnInit } from '@angular/core';
import { MeteoService, Meteo } from '../../service/meteo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private serviceMeteo: MeteoService) { }

  private laMeteo : Meteo;
  private test : string[] = [];
  ngOnInit() {
    this.laMeteo = new Meteo();
    for(var i = 0; i<10; i++){
      this.test[i]="Element "+i;
    }

    this.serviceMeteo.getMeteo().subscribe(res =>{
      //Voir les données du Json dans la console
      console.log(res["fcst_day_0"]);
      //Fait de manière statique
      this.laMeteo.pushDay(res["fcst_day_0"]);
      this.laMeteo.pushDay(res["fcst_day_1"]);
      this.laMeteo.pushDay(res["fcst_day_2"]);
      this.laMeteo.pushDay(res["fcst_day_3"]);
      this.laMeteo.pushDay(res["fcst_day_4"]);
    })

  }

}
