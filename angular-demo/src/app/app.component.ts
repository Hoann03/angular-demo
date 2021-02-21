import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  chaDeInputForm :string;
  logoInputForm :string;
  vInputForm :string;

  danhSachTraLoi :cauTraLoi [] = [];

  constructor() {
    this.chaDeInputForm = "";
    this.logoInputForm = "";
    this.vInputForm = "";
   }

   submit() {
    console.log(this.chaDeInputForm);
    console.log(this.logoInputForm);
    console.log(this.vInputForm);
    const cauTraLoi : cauTraLoi = {
      chaDe : this.chaDeInputForm,
      logo : this.logoInputForm,
      v : this.vInputForm
    }

    this.danhSachTraLoi.push(cauTraLoi);
  }
}

export interface cauTraLoi {
  chaDe :string;
  logo :string;
  v :string;
}
