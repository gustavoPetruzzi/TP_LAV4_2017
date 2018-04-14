import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatroImagenesComponent } from './cuatro-imagenes.component';

describe('CuatroImagenesComponent', () => {
  let component: CuatroImagenesComponent;
  let fixture: ComponentFixture<CuatroImagenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuatroImagenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuatroImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
