import {Injectable}              from '@angular/core';

import {HttpInterceptorService} from './http-interceptor.service'

@Injectable()
export class LoginService {
  Url='http://203.195.234.192:8080/user';

  constructor(private httpInterceptorService: HttpInterceptorService) {
  }

  /**
   * 登陆功能
   * @param params
   * @returns {Promise<{}>}
   */
  login(userName: string, passWord: string,loginType:any) {

    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/checkLogin',
      data: {
        username: userName,
        password: passWord,
        logintype:loginType
      },
    });

  }
}
