import {HttpHeaders} from '@angular/common/http';

export const httpOptionsBase = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export const serverUrlApi = 'https://obscure-hollows-29163.herokuapp.com/api';
export const serverUrlUploads = 'https://obscure-hollows-29163.herokuapp.com/uploads'