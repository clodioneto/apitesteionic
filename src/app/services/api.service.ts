import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = 'https://jsonplaceholder.typicode.com/';
  private options: any = {headers: new HttpHeaders ({'Content-type': 'application/json; charset=UTF-8'})};

  constructor(private http: HttpClient) { }

  createData(data: any){
    return this.http.post(`${this.api}posts`, JSON.stringify(data));

  }

  readData(){
    return this.http.get(`${this.api}posts`)
  }

  updateData(){

  }

  deleteData(){

  }
}
