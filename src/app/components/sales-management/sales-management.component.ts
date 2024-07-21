import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/models/sales';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-management',
  templateUrl: './sales-management.component.html',
  styleUrls: ['./sales-management.component.css']
})
export class SalesManagementComponent implements OnInit {

  salesList: Sales[] = [];
  sales: Sales = { dealName: '', stage: '', amount: 0, contactId: 0 };
  showSales:boolean = false;
  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.getSales();
  }

  getSales(): void {
    this.salesService.getSales().subscribe((salesList) => (this.salesList = salesList));
  }

  onSubmit(): void {
    if (this.sales.id) {
      this.salesService.updateSales(this.sales.id, this.sales).subscribe(() => {
        this.getSales();
      this.resetForm();
      });
    } else {
      this.salesService.createSales(this.sales).subscribe(() => {
        this.getSales();
        this.resetForm();
      });
    }
  }

  editSales(sales: Sales): void {
    this.sales = { ...sales };
  }

  deleteSales(id: number | undefined): void {
    if (id !== undefined) {
      this.salesService.deleteSales(id).subscribe(() => this.getSales());
    }
  }

  resetForm(): void {
    this.sales = { dealName: '', stage: '', amount: 0, contactId: 0 };
  }
  toggleSales(): void {
    this.showSales = !this.showSales;
  }

}
