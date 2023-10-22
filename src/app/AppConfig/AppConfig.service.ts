import { InjectionToken } from '@angular/core';
import { AppConfig } from './AppConfig.interface';
import { environment } from 'src/environtment/enironment';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG = {
    apiEndpoint :environment.apiEndpoint,
}
