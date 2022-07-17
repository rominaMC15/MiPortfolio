import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAddComponent } from './icons-add.component';

describe('IconsAddComponent', () => {
  let component: IconsAddComponent;
  let fixture: ComponentFixture<IconsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
