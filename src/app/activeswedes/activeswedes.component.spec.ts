import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveswedesComponent } from './activeswedes.component';

describe('ActiveswedesComponent', () => {
  let component: ActiveswedesComponent;
  let fixture: ComponentFixture<ActiveswedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveswedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveswedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
