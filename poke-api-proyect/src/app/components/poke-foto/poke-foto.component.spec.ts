import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFotoComponent } from './poke-foto.component';

describe('PokeFotoComponent', () => {
  let component: PokeFotoComponent;
  let fixture: ComponentFixture<PokeFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeFotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
