import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/observable/of';
import { NgxPaginateModule } from 'ngx-paginate';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private products: any[];
  p: number = 1;
  
  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getProduct();
   
  }
  getProduct(){
    this.http.get(" http://199.241.140.129:8080/bluecold/user/getUser").subscribe(
      (res)=>{
        console.log("list of product",res.json());
        this.products= res.json();

      },
      (err)=>{
        console.log("error in product list", err);
      }
    )
  }

  onSearchChange(searchValue : string ) {  
    console.log(searchValue);}

}

