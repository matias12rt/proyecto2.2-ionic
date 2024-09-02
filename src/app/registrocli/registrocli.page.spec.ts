import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrocliPage } from './registrocli.page';

describe('RegistrocliPage', () => {
  let component: RegistrocliPage;
  let fixture: ComponentFixture<RegistrocliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrocliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
