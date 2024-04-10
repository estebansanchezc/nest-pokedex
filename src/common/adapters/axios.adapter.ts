import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interfaces';
import { Injectable } from '@nestjs/common';
import https from 'https';

@Injectable()
export class AxiosAdapter implements HttpAdapter {

  private axios: AxiosInstance = axios.create({
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  });

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error('this is an error- check logs');
    }
  }
}
