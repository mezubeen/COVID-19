import { ThemeService } from './services/theme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent  {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private theme: ThemeService
  ) {

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onClick(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      this.theme.enableDark();
    }
    else{
      this.theme.enableLight();
    }
  }

   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');		
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
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

  toAbout(){
    this.router.navigate(['about']);
  }
  
}
