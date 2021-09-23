import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";
import {CommunicationService} from "../../service/communication.service";

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit, OnDestroy {
  forexList = [];

  needen = ['EUR/USD',
    'USD/CAD',
    'GBP/USD',
    'USD/CHF',
    'USD/JPY',
    'USD/CNH',
    'USD/HKD',
    'EUR/CHF',
    'XAU/USD',
    'XAG/USD',
    'XPD/USD',
    'XPT/USD',
    'AUD/USD',
    'USD/RUB',
    'USD/MXN',
    'USD/COP',
    'USD/PEN',
    'USD/ILS',
    'USD/TRY']

  // needen = ['AUD/USD', 'EUR/CHF', 'EUR/USD', 'GBP/USD','USD/CAD', 'USD/CHF', 'USD/CNH', 'USD/HKD','USD/ILS', 'USD/JPY', 'USD/MXN','USD/RUB',
  // 'USD/TRY', 'XAU/USD', 'XPD/USD', 'XPD/USD', 'XAG/USD']
  // needen = ['AUD/USD', 'EUR/CHF','USD/CHF','EUR/USD']
  recall;
  constructor(private call : ApireqService, private communitaion : CommunicationService) {
    this.forexList = this.call.getDataForItemReusable(this.needen)
    this.communitaion.changeTitle("Forex")

  }

  ngOnInit() {
    this.recall = setInterval(() => {
      this.forexList = this.call.getDataForItemReusable(this.needen)
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



