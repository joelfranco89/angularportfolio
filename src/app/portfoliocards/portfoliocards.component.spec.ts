import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliocardsComponent } from './portfoliocards.component';

describe('PortfoliocardsComponent', () => {
  let component: PortfoliocardsComponent;
  let fixture: ComponentFixture<PortfoliocardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliocardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
