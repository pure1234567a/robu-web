import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/services/service-api/service-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  itemId: any;
  productDetail: any;

  constructor(
    private serviceApi: ServiceApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if (params['id']) {
          this.itemId = params['id'];
          this.getProductDerail(this.itemId);
        }

      });
  }

  async getProductDerail(id) {
    const res: any = await this.serviceApi.getProdById(id);
    // console.log(res)
    this.productDetail = res.data
    console.log(this.productDetail)
  }

}
