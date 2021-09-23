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
  DATA = ['AAPL',
    'MSFT',
    'GOOG',
    'AMZN',
    'FB',
    'TSLA',
    'NVDA',
    'JPM',
    'WMT',
    'BAC',
    'DIS',
    'NFLX',
    'PFE',
    'CSCO',
    'KO',
    'XOM',
    'INTC',
    'T',
    'MCD',
    'BA',
    'AMD',
    'GE',
    'F']
  // DATA = ['AAPL', 'AAPL']
  constructor(private call : ApireqService, private communitaion : CommunicationService) {
    this.stocks = this.call.getDataForItemReusable(this.DATA)
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
