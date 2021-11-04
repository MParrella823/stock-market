import { Component, Input, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  @Input() public stock: Stock;
  public stockClasses: any;
  public buttonText: string = "Add To Favorites";
  public randomVar: boolean = true;

  constructor() {
    this.stock = new Stock('', '', 0.00, 0.00);
   }

  ngOnInit(): void {    
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.5;
    console.log('largeChange: ', largeChange);
    console.log('diff: ', diff);
    this.stockClasses = {
      "stock-container" : true,
      "positive" : this.stock.isPositiveChange(),
      "negative" : !this.stock.isPositiveChange()
    };
  }

  handleFavorite(event: any){
    this.stock.favorite = !this.stock.favorite;
    if (this.stock.favorite){
      this.buttonText = 'Remove From Favorites';
    } else {
      this.buttonText = 'Add To Favorites';
    }

    console.log(event);
  }

  handleMouseOver() {
    this.randomVar = !this.randomVar;
    this.stockClasses = {
      "stock-container" : true,
      "positive" : this.stock.isPositiveChange(),
      "negative" : !this.stock.isPositiveChange(),
      "random" : this.randomVar
    };
  }

  trackStockByCode(index: any, stock: Stock) {
    return stock.code;
  }

}
