import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {
  vehicleForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.vehicleForm = this.formBuilder.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      year: ['', Validators.pattern('[0-9]{4}')],
      description: ['', Validators.required],
      sold: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit(data) {
    return this.sendVehicle(
      data.name,
      data.manufacturer,
      data.year,
      data.description,
      data.sold
    );
  }

  sendVehicle(name, manufacturer, year, description, sold) {
    const vehicle = {
      name,
      manufacturer,
      year,
      description,
      sold: sold || 0
    };

    const response = this.apiService.addVehicle(vehicle).subscribe(res => {
      this.router.navigate(['']);
    });
  }

}
