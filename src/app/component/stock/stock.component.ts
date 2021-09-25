import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";
import {CommunicationService} from "../../service/communication.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, OnDestroy {
  stocks = []
  recall;
  DATA: any;

  constructor(private call : ApireqService, private communitaion : CommunicationService) {
    this.call.getItemsFromFireBase("stocks").then((value) =>{
      this.DATA = value;
      this.stocks = this.call.getDataForItemReusable(value)
    });
    this.communitaion.changeTitle("Stocks")
  }

  ngOnInit() {
    this.recall = setInterval(() => {
      this.stocks = this.call.getDataForItemReusable(this.DATA)
    }, 180 * 1000);
  }

  ngOnDestroy(){
    if (this.recall) {
      clearInterval(this.recall);
    }
  }
  getDetails(symbol) {
    this.communitaion.changeStatus(symbol)
  }




}
