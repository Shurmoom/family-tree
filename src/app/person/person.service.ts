import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly API = "http://localhost:3000/persons";

  constructor(private httpClient: HttpClient) { }

  create(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.API, person);
  }

  readAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.API);
  }

  update(id: number, person: Person) {
    const url = `${this.API}/${id}`;
    return this.httpClient.put<Person>(url, person); 
  }

  delete(id: number): Observable<Person> {
    const url = `${this.API}/${id}`;
    return this.httpClient.delete<Person>(url);
  }

  findById(id: number): Observable<Person> {
    const url = `${this.API}/${id}`;
    return this.httpClient.get<Person>(url);
  }

}
