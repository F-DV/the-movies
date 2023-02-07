import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*
Inicio de session: username= felipeAngular
                    password = 1234
                    Quedamos en el la hora 1:15:35
*/
