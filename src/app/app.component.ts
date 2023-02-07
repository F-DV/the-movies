import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { ConstanrUri } from './utils/contantUri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';

  constructor(
    private apiService: ApiService<any>,
  ){

    const getConfig = {url: ConstanrUri.tokenNew, params: {api_key:ConstanrUri.apiKey}};
    this.apiService.getService(getConfig).subscribe(val => {

      const {request_token} = val;
      sessionStorage.setItem('requestToken', request_token);
    });
  }
}
