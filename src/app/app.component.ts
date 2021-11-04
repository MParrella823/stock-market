import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my Angular test app';
  public mockData: Stock[] = [];


  ngOnInit(): void {
    this.createTestData();
    console.log('mockData: ', this.mockData);
  }

  createTestData(): void {
    let i = 0;
    while (i < 4) {
      let newObj = new Stock('Test Stock ' + i, 'TS' + i, parseFloat((Math.random() * 100).toFixed(2)), parseFloat((Math.random() * 100).toFixed(2)));
      this.mockData.push(newObj);
      i++;      
    }
  }
  
  trackStockByCode(index: any, stock: Stock){
    console.log('index: ', index);
    console.log('code: ', stock.code);
    return stock.code;
  }
}



