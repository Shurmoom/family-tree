import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {

  person: Person = {
    name: '',
  }

  clear() {
    this.person = {} as Person;
  }

  createPerson() {
    if (!this.person.name) {
      alert('O campo nome é obrigatório!');
      return;
    }
    alert('Submetido!');
    this.clear();
  }

}
