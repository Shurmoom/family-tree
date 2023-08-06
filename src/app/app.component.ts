import { Component, OnInit } from '@angular/core';
import { Person } from './person/person';
import { PersonService } from './person/person.service';
import { capitalize } from 'src/utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  person: Person = {
    name: '',
  };
  personList: Person[] = [];
  editing = false;

  constructor (
    private service: PersonService,
  ) { }

  clearPerson(): void {
    this.person = {} as Person;
  }

  updateList(): void {
    this.service.readAll().subscribe((persons) => {
      this.personList = persons;
    });
    this.findPaths();
  }

  ngOnInit(): void {
    this.updateList();
  }

  findPaths(): void {
  
  }

}
