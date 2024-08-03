import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDestructiveComponent } from './button-destructive.component';

describe('ButtonDestructiveComponent', () => {
  let component: ButtonDestructiveComponent;
  let fixture: ComponentFixture<ButtonDestructiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDestructiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDestructiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
