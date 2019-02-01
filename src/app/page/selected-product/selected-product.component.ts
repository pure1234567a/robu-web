import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/services/service-api/service-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {

  data: any;

  constructor(
    private serviceApi: ServiceApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    const res: any = await this.serviceApi.getProd();
    this.data = res.data
    console.log(this.data)
  }

  openProductDetail(item) {
    this.router.navigate(['product-detail'], { queryParams: { id: item._id } })
  }

}
