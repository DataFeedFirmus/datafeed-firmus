import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";
import {CommunicationService} from "../../service/communication.service";

@Component({
  selector: 'app-indicies',
  templateUrl: './indicies.component.html',
  styleUrls: ['./indicies.component.css']
})
export class IndiciesComponent  implements OnInit, OnDestroy {
  indicies = []
  recall;
  DATA =
    ['DJI',
      'SPX',
      'IXIC',
      'NDX',
      'RUT',
      'VIX',
      'AIM1',
      'GDAXI',
      'IBEX',
      ]
  constructor(private call : ApireqService, private communitaion : CommunicationService) {
    this.indicies = this.call.getDataForItemReusable(this.DATA)
    this.communitaion.changeTitle("Indexes")

  }

  ngOnInit() {
    this.recall = setInterval(() => {
      this.indicies = this.call.getDataForItemReusable(this.DATA)
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


