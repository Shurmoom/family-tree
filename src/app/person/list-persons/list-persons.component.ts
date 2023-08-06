import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent {

  @Input() super!: AppComponent;

  constructor (
    private service: PersonService,
  ) { }

  deletePerson(id: number): void {
    this.service.delete(id).subscribe(() => this.super.updateList());
  }

  editPerson(person: Person): void {
    this.super.person = person;
    this.super.editing = true;
  }

}
