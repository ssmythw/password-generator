import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'password-generator';
  length = 0;
  password = '';
  alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  numbers = '0123456789';
  specialChars = '!@#$%^&*()_+';

  contactForm = new FormGroup({
    length: new FormControl(),
    numbers: new FormControl(),
    specialChars: new FormControl(),
  });

  onSubmit() {
    console.log(this.contactForm.value);
    let str = this.alpha;
    if (this.contactForm.value.numbers == true) {
      str = str + this.numbers;
    }
    if (this.contactForm.value.specialChars == true) {
      str = str + this.specialChars;
    }
    let pw = '';
    for (let i = 0; i < this.contactForm.value.length; i++) {
      // for each iteration choose a random index of str and append it onto pw
      let randomNumber = Math.floor(Math.random() * str.length);
      pw = pw + str[randomNumber];
    }
    console.log(pw);
    this.password = pw;
  }
  onSliderChange() {
    this.length = this.contactForm.value.length;
  }
}
