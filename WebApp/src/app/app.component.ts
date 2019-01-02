import { Component, ViewChild, ElementRef } from '@angular/core';
import { WebApiService } from './shared/web-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private webapi: WebApiService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(async (params) => {
      let code = params['code']
      let state: string = params['state']
      if (code != null) {
        if (state[0] == 'x') {
          state = state.substring(1)
          window.location.href.replace('https://sketch-bot.appspot.com', 'http://localhost:4200')
          await this.webapi.requestToken(code);
          this.router.navigate(['sketch/' + state]);
        }
        else {
          await this.webapi.requestToken(code);
          this.router.navigate(['sketch/' + state]);
        }
      }
    })
  }
}
