import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalBootcampsComponent } from './technical-bootcamps.component';

describe('TechnicalBootcampsComponent', () => {
  let component: TechnicalBootcampsComponent;
  let fixture: ComponentFixture<TechnicalBootcampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalBootcampsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalBootcampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
