import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {
  vehicleForm: FormGroup;
  vehicle: any = {};
  vehicleId;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.vehicleForm = this.formBuilder.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      year: ['', Validators.pattern('[0-9]{4}')],
      description: ['', Validators.required],
      sold: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehicleId = params['id'];
      this.apiService.getVehicle(this.vehicleId).subscribe((res: any) => {
        this.vehicle = res.data[0];
      });
    });
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

    this.apiService.updateVehicle(this.vehicleId, vehicle).subscribe(res => {
      this.router.navigate(['']);
    });
  }

}
