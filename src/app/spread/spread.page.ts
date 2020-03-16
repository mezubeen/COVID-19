import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/core';


@Component({
  selector: 'app-spread',
  templateUrl: './spread.page.html',
  styleUrls: ['./spread.page.scss', '../../assets/css/custom.scss'],
})
export class SpreadPage implements OnInit {
  showToolbar = false;


  constructor() { }

  ngOnInit() {
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
    const scrollTop = $event.detail.scrollTop;
    this.showToolbar = scrollTop >= 225;
    }
    }
}
