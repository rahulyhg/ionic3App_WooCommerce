import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as WC from 'woocommerce-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  WooCommerce: any;

  constructor(public navCtrl: NavController) {
    this.WooCommerce = WC({
      url: "http://localhost/projects/ionic-woocommerce/",
      consumerKey: "ck_a90495c52f540c4d72839cded083d9608fd67caa",
      consumerSecret: "cs_dacbe39ee607907d98d05b3e6cf140914139843f"
    });
    this.WooCommerce.getAsync("products").then((data) => {
      console.log(data);
    },(err) => {
      console.log(err);
    })
    }

}
