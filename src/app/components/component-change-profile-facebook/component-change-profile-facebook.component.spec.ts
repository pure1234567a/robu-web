import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChangeProfileFacebookComponent } from './component-change-profile-facebook.component';

describe('ComponentChangeProfileFacebookComponent', () => {
  let component: ComponentChangeProfileFacebookComponent;
  let fixture: ComponentFixture<ComponentChangeProfileFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentChangeProfileFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentChangeProfileFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
