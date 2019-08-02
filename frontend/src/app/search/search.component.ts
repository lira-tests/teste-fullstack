import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  vehicles: any = [];
  vehicleName;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.vehicleName = params['q'];
      this.apiService.getVehicleByName(this.vehicleName).subscribe((res: any) => {
        this.vehicles = res.data;
      });
    });
  }
}
