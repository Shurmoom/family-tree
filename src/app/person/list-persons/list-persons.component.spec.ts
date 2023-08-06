import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonsComponent } from './list-persons.component';

describe('ListPersonsComponent', () => {
  let component: ListPersonsComponent;
  let fixture: ComponentFixture<ListPersonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPersonsComponent]
    });
    fixture = TestBed.createComponent(ListPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
