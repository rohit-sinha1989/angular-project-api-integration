import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  get(url: any) {
    try {
      console.error("Get Try  =>", url);
      return this.http.get(url);
    } catch (error) {
      console.error("Get Catch URL =>", url);
      console.error("Get Catch error =>", error);
      return error;
    }
  }

  post(url: any, data: any, header: any) {
    try {
      if (header && typeof (header) == 'object') {
        const httpOptions = {
          headers: new HttpHeaders(header)
        };
        return this.http.post(url, data, httpOptions);
      } else {
        return this.http.post(url, data);
      }

    } catch (error) {
      console.error("Post Catch Error =>", error);
      return error;
    }
  }

  download(url: any, data: any) {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    };
    return this.http.post(url, data, httpOptions);
  }
  
}
