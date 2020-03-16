import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpreadPage } from './spread.page';

describe('SpreadPage', () => {
  let component: SpreadPage;
  let fixture: ComponentFixture<SpreadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpreadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
