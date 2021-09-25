import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ChartsModule, ThemeService} from "ng2-charts";
import { ForexComponent } from './component/forex/forex.component';
import { EtfComponent } from './component/etf/etf.component';
import { StockComponent } from './component/stock/stock.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import {InterceptorService} from "./services/interceptor.service";
import { IndiciesComponent } from './component/indicies/indicies.component';
import { InfoModalComponent } from './component/info-modal/info-modal.component';
import {FormsModule} from "@angular/forms";
import { ErrorComponent } from './component/error/error.component';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireModule} from "@angular/fire";

export const firebaseConfig = {
  authDomain: "courses-4d546.firebaseapp.com",
  databaseURL: "https://datafeed-firmus-default-rtdb.firebaseio.com",
  projectId: "datafeed-firmus"
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ForexComponent,
    EtfComponent,
    StockComponent,
    SpinnerComponent,
    IndiciesComponent,
    InfoModalComponent,
    ErrorComponent
  ],
    imports: [
      AngularFirestoreModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(firebaseConfig),
      BrowserModule,
       AppRoutingModule,
       HttpClientModule,
       ChartsModule,
       FormsModule
    ],
  providers: [ThemeService,
    AngularFirestore,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
