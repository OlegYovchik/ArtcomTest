import { Component, OnInit } from '@angular/core';
import { Product } from './classes/product';
import { GetJsonService } from './services/get-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  arrProducts: Product[] = [];
  searchObj: any = [];
  arrNew:any = [];
  product: any = [];
  count = 0;
  btnPreShow = false;
  btnNextShow = true;
  hide = false;
  
  constructor(private getJson: GetJsonService){}
  ngOnInit(){
    this.getJson.getJson().subscribe((data: Product[]) => {
      this.arrProducts = data;
      for(var i = 0; i < 10; i++ ){
        this.arrNew[i] = this.arrProducts[i];
      }  
    });
  }
  next(){
    if((this.arrProducts.length-this.count)>=20){
      this.count += 10;
      this.arrNew = [];
      for(var i = 0; i < 10; i++){
        this.arrNew[i] = this.arrProducts[i+this.count];
      }
      this.btnNextShow = true;
      this.btnPreShow = true;
      console.log(this.count)
    }else if((this.arrProducts.length-this.count)<20){
      this.arrNew = [];
      this.count += 10;
      for(var i = 0; i < (this.arrProducts.length-this.count); i++){
        this.arrNew[i] = this.arrProducts[i+this.count];
      }
      this.btnNextShow = false;
    }else{
      this.btnPreShow = true;
      this.btnNextShow = false;
      console.log(this.count)

    }
  }
  previous(){
    if(this.count>=10){
      this.count -= 10;
      this.arrNew = [];
      for(var i = 0; i < 10; i++){
        this.arrNew[i] = this.arrProducts[i+this.count];
      }
      this.btnNextShow = true;
    }
    if(this.count<10){
      this.btnPreShow = false;
      this.btnNextShow = true;
    }

    console.log(this.count)

  }
  getInfo(id:number){
    this.product = [];
    this.searchObj = this.arrProducts.find(item=>item.ProductId === id);
    for (var key in this.searchObj) {
      if (this.searchObj.hasOwnProperty(key)) {
        if(this.searchObj[key]==null){
          this.product.push("неизвестно");
        }else{
          this.product.push(this.searchObj[key]);
        }
      }
    }
    this.hide = true;
  }
}
