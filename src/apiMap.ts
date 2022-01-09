import {environment} from './environments/environment';

export const getApiName = (keyOfApi) => environment.baseApiUrl + '/' + keyOfApi;
export const getApiNameWithVariable = (firstUrl, variable, secondUrl) => firstUrl + '/' + variable + '/' + secondUrl;
export const BASE_URL = environment.baseApiUrl;

export const Delegations = 'delegation';
export const Brands = 'brands';



