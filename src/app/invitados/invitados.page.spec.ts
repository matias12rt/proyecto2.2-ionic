import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvitadosPage } from './invitados.page';

describe('InvitadosPage', () => {
  let component: InvitadosPage;
  let fixture: ComponentFixture<InvitadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
