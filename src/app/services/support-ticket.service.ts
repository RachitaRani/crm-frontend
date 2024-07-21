import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupportTicket } from '../models/support-ticket';

@Injectable({
  providedIn: 'root'
})
export class SupportTicketService {
  private apiUrl = 'http://localhost:8080/api/auth/support-tickets';

  constructor(private http: HttpClient) {}

  getSupportTickets(): Observable<SupportTicket[]> {
    return this.http.get<SupportTicket[]>(this.apiUrl);
  }

  getSupportTicketById(id: number): Observable<SupportTicket> {
    return this.http.get<SupportTicket>(`${this.apiUrl}/${id}`);
  }

  createSupportTicket(supportTicket: SupportTicket): Observable<SupportTicket> {
    return this.http.post<SupportTicket>(this.apiUrl, supportTicket);
  }

  updateSupportTicket(id: number, supportTicket: SupportTicket): Observable<SupportTicket> {
    return this.http.put<SupportTicket>(`${this.apiUrl}/${id}`, supportTicket);
  }

  deleteSupportTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
