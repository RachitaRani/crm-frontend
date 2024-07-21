import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-management',
  templateUrl: './contact-management.component.html',
  styleUrls: ['./contact-management.component.css']
})
export class ContactManagementComponent implements OnInit {

  contacts: Contact[] = [];
  contact: Contact = { name: '', email: '', phone: '' };
  showContacts: boolean = false;

  constructor(private contactService: ContactService ) { }

  ngOnInit(): void {
    this.getContacts();
  }
  getContacts(): void {
    this.contactService.getContacts().subscribe((contacts) => (this.contacts = contacts));
  }

  onSubmit(): void {
    if (this.contact.id) {
      this.contactService.updateContact(this.contact.id, this.contact).subscribe(() => {
        this.getContacts();
        console.log("Contact details:", this.contact);
        this.resetForm();
        alert("Succesfully added contact with EmailID: " + this.contact.email);
      });
    } else {
      this.contactService.createContact(this.contact).subscribe(() => {
        this.getContacts();
        this.resetForm();
      });
    }
  }

  editContact(contact: Contact): void {
    this.contact = { ...contact };
  }

  deleteContact(id: number | undefined): void {
    if (id !== undefined) {
      this.contactService.deleteContact(id).subscribe(() => this.getContacts());
    }
  }

  resetForm(): void {
    this.contact = { name: '', email: '', phone: '' };
  }

  toggleContacts(): void {
    this.showContacts = !this.showContacts;
  }
}
