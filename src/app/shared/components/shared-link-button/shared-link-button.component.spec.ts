import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLinkButtonComponent } from './shared-link-button.component';

describe('SharedLinkButtonComponent', () => {
  let component: SharedLinkButtonComponent;
  let fixture: ComponentFixture<SharedLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedLinkButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
