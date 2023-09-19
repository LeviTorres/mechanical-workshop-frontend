import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProviderPageComponent } from './add-provider-page.component';

describe('AddProviderPageComponent', () => {
  let component: AddProviderPageComponent;
  let fixture: ComponentFixture<AddProviderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProviderPageComponent]
    });
    fixture = TestBed.createComponent(AddProviderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
