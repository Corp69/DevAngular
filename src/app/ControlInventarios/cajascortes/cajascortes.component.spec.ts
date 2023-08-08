import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajascortesComponent } from './cajascortes.component';

describe('CajascortesComponent', () => {
  let component: CajascortesComponent;
  let fixture: ComponentFixture<CajascortesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajascortesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajascortesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
