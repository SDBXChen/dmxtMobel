import {Injectable}              from '@angular/core';

import {HttpInterceptorService} from './http-interceptor.service'

@Injectable()
export class TcourseService{
   Url='http://203.195.234.192:8080/user';

  constructor(private httpInterceptorService: HttpInterceptorService) {

  }

  searchTcourse(TID: any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/findByTeacher',
      data:{
        userID:TID,
      }

    });
  }
  searchScourse(CID:any){
    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/findByCourse',
      data:{
        classID:CID,
      }

    });
  }
  listregisterbycourse(CID:any){
    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/listRegisterByCourse',
      data:{
        classID:CID,
      }
    });
  }
addregister(qiandao){
  return this.httpInterceptorService.request({
    method: 'POST',
    url: this.Url+'/addRegister',
    data:qiandao,
  });
}
  findregister(CID:any){
    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/findRegister',
      data:{
        classID:CID,
      }
    });
  }
  updataregister(registerid,endtime){
    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/updateRegister',
      data:{
        register_ID:registerid,
        end_time:endtime,
      }
    });

  }


}
