import {Injectable}              from '@angular/core';

import {HttpInterceptorService} from './http-interceptor.service'

@Injectable()
export class ScourseService{
  Url='http://203.195.234.192:8080/user';

  constructor(private httpInterceptorService: HttpInterceptorService) {
  }

  searchScourse(SID: any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/findByStudent',
      data:{
        userID:SID,
      }

    });
  }
  teacherlist(){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: this.Url+'/listTeacher',
      data:{
      }

    });
  }
   addcourse(classStdID) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/addNamerecord',
      data: classStdID,
    });
  }
  deletecourse(classStdID) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/deleteNamerecord',
      data: classStdID,
    });
  }
  updateregisterdetailmobile(qiandao){
    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/updateRegisterdetailMobile',
      data:qiandao,
    });
  }
findclassmate(classmate){
  return this.httpInterceptorService.request({
    method: 'POST',
    url: this.Url+'/findClassmate',
    data:classmate,
  });
}

}
