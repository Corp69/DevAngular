import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioBarComponent } from './medio-bar.component';

describe('MedioBarComponent', () => {
  let component: MedioBarComponent;
  let fixture: ComponentFixture<MedioBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedioBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedioBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
