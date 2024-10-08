import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTarjetaComponent } from './poke-tarjeta.component';

describe('PokeTarjetaComponent', () => {
  let component: PokeTarjetaComponent;
  let fixture: ComponentFixture<PokeTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeTarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
