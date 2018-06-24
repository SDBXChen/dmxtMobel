import {Injectable}              from '@angular/core';

import {HttpInterceptorService} from './http-interceptor.service'

@Injectable()
export class RegisterService {
  Url='http://203.195.234.192:8080/user';
  constructor(private httpInterceptorService: HttpInterceptorService) {
  }


  registerS(registerUser:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url:this.Url+'/registerStudent',
      data: registerUser,
    });

  }
  registerT(registerUser:any) {
    console.log('1');
    return this.httpInterceptorService.request({
      method: 'POST',
      url:this.Url+'/registerTeacher',
      data: registerUser,
    });
  }
}
