import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";
import {CommunicationService} from "../../service/communication.service";

@Component({
  selector: 'app-etf',
  templateUrl: './etf.component.html',
  styleUrls: ['./etf.component.css']
})
export class EtfComponent implements OnInit, OnDestroy {
  // needen = ['BTC', 'ETH', 'XPT']
  needen = ['BTC/USD',
    'ETH/USD',
    'LTC/USD',
    'BCH/USD',
    'LINK/USD',
    'ETC/USD',
    'EOS/USD',
    'XLM/USD',
    'XTZ/USD',
    'REP/USD',
    'ADA/USD',
    'UNIS/USD',
    'AAVE/USD',
    'ATOM/USD',
    'ALGO/USD',
    'FIL/USD',
    'MKR/USD',
    'COMP/USD',
    'YFI/USD',
    'DOGE/USD',
    'PDOTN/USD']

  etfList = []
  recall;
  constructor(private call : ApireqService, private communitaion : CommunicationService) {
    this.etfList = this.call.getDataForItemReusable(this.needen)
    this.communitaion.changeTitle("Crypto")
  }
  ngOnInit() {
    this.recall = setInterval(() => {
      this.etfList = this.call.getDataForItemReusable(this.needen)
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



