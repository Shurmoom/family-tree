import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { capitalize } from 'src/utils/utils';
import { PersonService } from '../person.service';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {

  @Input() super!: PersonComponent;

  constructor (
    private service: PersonService,
  ) { }

  createPerson(): void {
    if (!this.super.person.name) {
      return;
    }
    this.super.person.name = capitalize(this.super.person.name);
    if (this.super.editing) {
      this.service.update(this.super.person.id!, this.super.person).subscribe((createdPerson) => {
        if (!!createdPerson.marriedTo) {
          this.service.findById(createdPerson.marriedTo).subscribe((marriedPerson) => {
            this.service.update(marriedPerson.id!, { ...marriedPerson, marriedTo: createdPerson.id }).subscribe();
          })
        }
        this.super.updateList();
        this.super.clearPerson();
        this.super.editing = false;
      });
      return;
    }
    this.service.create(this.super.person).subscribe((createdPerson) => {
      if (!!createdPerson.marriedTo) {
        this.service.findById(createdPerson.marriedTo).subscribe((marriedPerson) => {
          this.service.update(marriedPerson.id!, { ...marriedPerson, marriedTo: createdPerson.id }).subscribe();
        })
      }
      this.super.updateList();
      this.super.clearPerson();  
    });
  }

}
