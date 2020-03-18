import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private socialSharing: SocialSharing) { }

  ngOnInit() {
  }

  toAwreness(){
    this.router.navigate(['awareness']);
  }

  toSpread(){
    this.router.navigate(['spread']);
  }

  toPrevention() {
    this.router.navigate(['prevention']);
  }

  toSymptoms() {
    this.router.navigate(['symptoms']);
  }

  toDos() {
    this.router.navigate(['dos']);
  }

  share() {
    var options = {
        message: 'Hi, I am using Corona Rescue which is great to the knwledge of Corona Virus',
        subject: 'Corona Rescue',
        files: ['', ''],
        url: 'https://play.google.com/store/apps/details?id=com.corona.rescue',
        chooserTitle: 'Pick an app'
    }
    this.socialSharing.shareWithOptions(options);
}

}
