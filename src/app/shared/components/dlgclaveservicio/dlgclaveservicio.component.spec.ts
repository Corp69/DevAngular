import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgclaveservicioComponent } from './dlgclaveservicio.component';

describe('DlgclaveservicioComponent', () => {
  let component: DlgclaveservicioComponent;
  let fixture: ComponentFixture<DlgclaveservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgclaveservicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlgclaveservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
