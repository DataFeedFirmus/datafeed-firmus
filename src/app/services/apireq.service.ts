import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommunicationService} from "../service/communication.service";
import {AngularFireDatabase,  AngularFireList} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class ApireqService {
  list = []
  apiKey:any
  // '5c6805a923d8447f9f8b697c18d7fb64' <--test key

  constructor(private http: HttpClient, private communicationService : CommunicationService, private af: AngularFireDatabase ) {
    this.list = []
    this.getItemsFromFireBase("apiKey").then((value) =>{
      this.apiKey = value;
    });
  }

  getDataForItem(item){
    return this.http.get("https://api.twelvedata.com/quote?symbol="+ item +"&dp=2&apikey=" + this.apiKey)
  }

  getCurrentPrieForItem(item){
    return this.http.get("https://api.twelvedata.com/price?symbol="+ item +"&dp=2&apikey=" + this.apiKey)
  }

  getDataForItemReusable(item){
    this.list = []
    this.getDataForItem(item).subscribe(data =>{
      if(data['code'] == 429){
        console.log('tuka ', data['message'])
        this.communicationService.changeError(data['message'])
      }
      this.getCurrentPrieForItem(item).subscribe(priceData =>{
        if(data['code'] == 429){
          console.log('tuka ', data['message'])
          this.communicationService.changeError(data['message'])
        }else{
          for(var i in data){
            var fifty  = data[i]['fifty_two_week']['range'].split('-');
            var firstNumber = fifty[0].replace(/\s/g, "");
            var secondNumber = fifty[1].replace(/\s/g, "");
            firstNumber = parseFloat(firstNumber).toFixed(2)
            secondNumber = parseFloat(secondNumber).toFixed(2)
            data[i]['fifty_two_week']['range'] = firstNumber + ' - ' + secondNumber
            for(var j in priceData){
              if(i==j){
                var dataWithPrice = data[i];
                dataWithPrice['price'] = priceData[j]['price']
                this.list.push(dataWithPrice)
              }
            }
          }
        }
      })
    })
    return this.list;
  }


  getItemsFromFireBase(item) {

    return new Promise((resolve, reject) => {
      this.af.database.ref(item + '/').on('value', (snapshot) => {
        resolve(snapshot.val());
      });
    });


  }


}
