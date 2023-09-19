import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProviderPageComponent } from './edit-provider-page.component';

describe('EditProviderPageComponent', () => {
  let component: EditProviderPageComponent;
  let fixture: ComponentFixture<EditProviderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProviderPageComponent]
    });
    fixture = TestBed.createComponent(EditProviderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
