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
  maxLayer = 0;
  formatedList: Person[][] = [];

  constructor(
    private service: PersonService,
  ) { }

  clearPerson(): void {
    this.person = {} as Person;
  }

  updateList(): void {
    this.service.readAll().subscribe((persons) => {
      this.personList = persons;
      this.updateLocalList();
      console.log(this.personList);
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

  private updateByPaths(): void {
    this.personList.forEach((person, index) => {
      const layerNumber = this.findPaths(person.id!, 0);
      if (layerNumber > this.maxLayer) {
        this.maxLayer = layerNumber;
      }
      this.personList[index] = { ...person, layer: layerNumber };
    });
  }

  private matchPartnersByHighestPath(): void {
    this.personList.forEach((person, index) => {
      if (person.marriedTo) {
        const partner = this.personList.find((partner) => +partner.id! === +person.marriedTo!)!;
        if (person.layer! < partner.layer!) {
          this.personList[index] = { ...person, layer: partner.layer };
        }
      }
    });
  }

  private formatList(): void {
    const list = [];
    for (let i = 0; i <= this.maxLayer; i++) {
      list.push(this.personList.filter((person) => person.layer === i));
    }
    this.formatedList = list;
  }

  private updateLocalList(): void {
    this.updateByPaths();
    this.matchPartnersByHighestPath();
    this.formatList();
  }
}
