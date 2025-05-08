import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  

  constructor() { }

  static getToken() {
    
    
    const authTokenPass = environment.authTokenPass;

    const authTokenKey = CryptoJS.enc.Utf8.parse(environment.authTokenKey);
    const authTokenIv = CryptoJS.enc.Utf8.parse(environment.authTokenIv);

    const encryptedToken = CryptoJS.AES.encrypt(
      authTokenPass,
      authTokenKey,
      {
        iv: authTokenIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }
    ).toString();
    
    return encryptedToken;

  }

  
}
