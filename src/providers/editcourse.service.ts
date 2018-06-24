import {Injectable}              from '@angular/core';

import {HttpInterceptorService} from './http-interceptor.service'

@Injectable()
export class EditcourseService{
  Url='http://203.195.234.192:8080/user';

  constructor(private httpInterceptorService: HttpInterceptorService) {
  }
  /**
   *
   * @param params
   * @returns {Promise<{}>}
   */
  editTcourse(classmap:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/editCourse',
      data:classmap,
    });
  }
  deleteTcourse(cID: any){
    return this.httpInterceptorService.request({
      method: 'POST',
      url: this.Url+'/deleteCourse',
      data:{
        course_number:cID,
      }
    });
  }
  addTcourse(classmap:any){
    return this.httpInterceptorService.request({
      method: 'POST',
      url:  this.Url+'/addCourse',
      data:classmap,
    });

  }
}
