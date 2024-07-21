import { Component, OnInit } from '@angular/core';
import { SupportTicket } from 'src/app/models/support-ticket';
import { SupportTicketService } from 'src/app/services/support-ticket.service';

@Component({
  selector: 'app-support-ticket-management',
  templateUrl: './support-ticket-management.component.html',
  styleUrls: ['./support-ticket-management.component.css']
})
export class SupportTicketManagementComponent implements OnInit {

  supportTickets: SupportTicket[] = [];
  supportTicket: SupportTicket = { issue: '', status: 'Open', createdAt: new Date(), contactId: 0 };
  showTickets:boolean = false;

  constructor(private supportTicketService: SupportTicketService) { }

  ngOnInit(): void {
    this.getSupportTickets();
  }

  getSupportTickets(): void {
    this.supportTicketService.getSupportTickets().subscribe((tickets) => (this.supportTickets = tickets));
  }

  onSubmit(): void {
    if (this.supportTicket.id) {
      this.supportTicketService.updateSupportTicket(this.supportTicket.id, this.supportTicket).subscribe(() => {
        this.getSupportTickets();
        this.resetForm();
      });
    } else {
      this.supportTicketService.createSupportTicket(this.supportTicket).subscribe(() => {
        this.getSupportTickets();
        this.resetForm();
      });
    }
  }
  editSupportTicket(ticket: SupportTicket): void {
    this.supportTicket = { ...ticket, createdAt: new Date(ticket.createdAt) };
  }

  deleteSupportTicket(id: number | undefined): void {
    if (id !== undefined) {
      this.supportTicketService.deleteSupportTicket(id).subscribe(() => this.getSupportTickets());
    }
  }

  resetForm(): void {
    this.supportTicket = { issue: '', status: 'Open', createdAt: new Date(), contactId: 0 };
  }

  toggleSupportTickets(): void {
    this.showTickets = !this.showTickets;
  }
}
