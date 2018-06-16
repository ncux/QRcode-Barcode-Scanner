import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // for scanning codes
  options: BarcodeScannerOptions;
  scannedData: any = {};

  // for encoding text
  inputText: string;
  encodedText: any = {};


  constructor(public navCtrl: NavController, public scanner: BarcodeScanner) { }

  async scan() {
    this.options = { prompt: 'Scan the code...' };
    try {
      this.scannedData = await this.scanner.scan(this.options);

    } catch (e) {
      console.log(e);
    }
  }


  async encode() {
    try {
      this.encodedText = await this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.inputText);

    } catch (e) {
      console.log(e);
    }
  }

}
