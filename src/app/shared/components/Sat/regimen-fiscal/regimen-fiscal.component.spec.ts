import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimenFiscalComponent } from './regimen-fiscal.component';

describe('RegimenFiscalComponent', () => {
  let component: RegimenFiscalComponent;
  let fixture: ComponentFixture<RegimenFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegimenFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegimenFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
