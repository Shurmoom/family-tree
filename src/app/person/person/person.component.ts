import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
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
  }

  ngOnInit(): void {
    this.updateList();
  }

  private findPaths(id: number, acc: number): number {
    const thisPerson = this.personList.find((person) => person.id === id);
    if (thisPerson?.firstParent === undefined) return acc;
    return this.findPaths(+thisPerson.firstParent, acc + 1);
  }

  calculateAll(): void {
    this.personList.forEach((person) => {
      const layerNumber = this.findPaths(person.id!, 0);
      this.service.update(person.id!, { ...person, layer: layerNumber}).subscribe();
    })
  }
}
