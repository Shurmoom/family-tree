import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { capitalize } from 'src/utils/utils';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  person: Person = {
    name: '',
  }

  personList: Person[] = [];

  constructor (
    private service: PersonService,
  ) { }

  updateList(): void {
    this.service.readAll().subscribe((persons) => {
      this.personList = persons;
    });
  }

  ngOnInit(): void {
    this.updateList();
  }

  clear(): void {
    this.person = {} as Person;
  }

  createPerson(): void {
    if (!this.person.name) {
      return;
    }
    this.person.name = capitalize(this.person.name);
    this.service.create(this.person).subscribe();
    this.updateList();
    this.clear();
  }

}
