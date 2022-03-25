export const IS_DEV = false;
let DEV_API_URL = 'http://192.168.1.102:8000/api';
export const API_URL = IS_DEV ? DEV_API_URL : 'https://api.heruko.com/api';

export const SIGHIN_API = API_URL + '/open/login?'; // POST METHOD
