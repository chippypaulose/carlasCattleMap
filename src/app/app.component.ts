import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CattleService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loc: any;
  zoom: number = 13.3;

  lat: number = -27.83008374;
  lng: number = 152.35180000;
  private red = "assets/red.png";
  private black = "assets/black.png";


  constructor(private http: HttpClient, private cattleservice: CattleService) {
  }


  title: string = 'Carla\'s Cattle';
  iconUrl = "assets/black.jpg";
  ngOnInit() {

    this.cattleservice.getContentJSON()
      .subscribe(data => {
        for (let i in data) {
          if (data[i].status === 1) {
            data[i].status = this.red;
          }
          else {
            data[i].status = this.black;
          }
          this.loc = data;
        }

      });
  }

  geticonUrl(status) {
    console.log('inside');
    if (status === 1) {
      this.iconUrl = this.red;
      return this.red;
    }
    else {
      this.iconUrl = this.black;
      return this.black;
    }

  }



}
