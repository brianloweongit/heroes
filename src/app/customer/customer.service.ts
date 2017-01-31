import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ICustomer, Customer } from './customer';


@Injectable()
export class CustomerService {
  private customersUrl = 'api/customers';  // URL to web api

  constructor(private http: Http) { }

  getCustomers(): Promise<ICustomer[]> {
    return this.http.get(this.customersUrl)
               .toPromise()
               .then(response => response.json().data as ICustomer[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCustomer(id: number): Promise<ICustomer> {
  const url = `${this.customersUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as ICustomer)
    .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(customer: ICustomer): Promise<ICustomer> {
    const url = `${this.customersUrl}/${customer.id}`;
    return this.http
      .put(url, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(() => customer)
      .catch(this.handleError);
  }

  create(name: string): Promise<ICustomer> {
    return this.http
      .post(this.customersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }


  delete(id: number): Promise<void> {
  const url = `${this.customersUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }
}
