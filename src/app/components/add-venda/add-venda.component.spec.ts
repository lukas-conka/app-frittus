import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendaComponent } from './add-venda.component';

describe('AddVendaComponent', () => {
  let component: AddVendaComponent;
  let fixture: ComponentFixture<AddVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
