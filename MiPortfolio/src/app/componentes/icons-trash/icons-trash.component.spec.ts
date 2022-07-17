import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsTrashComponent } from './icons-trash.component';

describe('IconsTrashComponent', () => {
  let component: IconsTrashComponent;
  let fixture: ComponentFixture<IconsTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsTrashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
