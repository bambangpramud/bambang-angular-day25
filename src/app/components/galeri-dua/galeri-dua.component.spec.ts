import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriDuaComponent } from './galeri-dua.component';

describe('GaleriDuaComponent', () => {
  let component: GaleriDuaComponent;
  let fixture: ComponentFixture<GaleriDuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriDuaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriDuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
