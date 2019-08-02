import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Vehicle: any = [];
  selectedRow: Number;
  setClickedRow: Function;
  selectedVehicle: Vehicle = { id: 0, name: '', manufacturer: '', year: 0, description: '', sold: false };

  constructor(private apiService: ApiService) {
    this.setClickedRow = (index, vehicle) => {
      this.selectedRow = index;
      this.selectedVehicle = vehicle;
    };
  }

  ngOnInit() {
    this.readVehicle();
  }

  readVehicle() {
    this.apiService.getVehicles().subscribe((data: any) => {
      this.Vehicle = data.data;
    });
  }

}
