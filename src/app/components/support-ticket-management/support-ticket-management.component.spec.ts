import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTicketManagementComponent } from './support-ticket-management.component';

describe('SupportTicketManagementComponent', () => {
  let component: SupportTicketManagementComponent;
  let fixture: ComponentFixture<SupportTicketManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportTicketManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportTicketManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
