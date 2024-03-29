import axios, { AxiosRequestConfig, AxiosResponse, HttpStatusCode } from 'axios';
import { OkResponse } from './responses/ok.response';

export class AxiosMethod<R=any> {
  method: Promise<AxiosResponse<R>>;

  constructor (method: Promise<AxiosResponse<R>>) {
    this.method = method;
  }
  
  async fetch (): Promise<AxiosResponse<R>> {
    return this.method;
  }

  async fetchData (): Promise<R> {
    return (await this.method).data;
  }
  
  async fetchStatus (): Promise<HttpStatusCode> {
    return (await this.method).status;
  }
}

export class AxiosAdapter {
  static get<R=OkResponse> (url: string, config?: AxiosRequestConfig) {
    return new AxiosMethod<R>(axios.get<any, AxiosResponse<R>>(url, config));
  }
  
  static post<D=any, R=OkResponse> (url: string, data?: D, config?: AxiosRequestConfig) {
    return new AxiosMethod<R>(axios.post<D, AxiosResponse<R>>(url, data, config));
  }
  
  static patch<D=any, R=OkResponse> (url: string, data?: D, config?: AxiosRequestConfig) {
    return new AxiosMethod<R>(axios.patch<D, AxiosResponse<R>>(url, data, config));
  }
  
  static delete<R=OkResponse> (url: string, config?: AxiosRequestConfig) {
    return new AxiosMethod<R>(axios.delete<any, AxiosResponse<R>>(url, config));
  }
  
  static put<D=any, R=OkResponse> (url: string, data?: D, config?: AxiosRequestConfig) {
    return new AxiosMethod<R>(axios.put<D, AxiosResponse<R>>(url, data, config));
  }
}