import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgProductoComponent } from './dlg-producto.component';

describe('DlgProductoComponent', () => {
  let component: DlgProductoComponent;
  let fixture: ComponentFixture<DlgProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlgProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
