import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

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

}
