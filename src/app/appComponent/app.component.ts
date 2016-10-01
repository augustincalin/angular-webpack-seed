import { Component } from '@angular/core';
import { TimeService} from '../timeService/time.service';

import '../../assets/styles/main.less';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
      time: any;
    constructor(timeService: TimeService) {
        timeService.getTime(1000, time => {
            this.time = time;
        });
    }
};