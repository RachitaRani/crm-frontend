import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagementComponent } from './components/contact-management/contact-management.component';
import { SalesManagementComponent } from './components/sales-management/sales-management.component';
import { TaskManagementComponent } from './components/task-management/task-management.component';
import { SupportTicketManagementComponent } from './components/support-ticket-management/support-ticket-management.component';
import { HomeComponent } from './home/home.component';
// import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contacts', component: ContactManagementComponent},
  { path: 'sales', component: SalesManagementComponent },
  { path: 'tasks', component: TaskManagementComponent },
  { path: 'support-tickets', component: SupportTicketManagementComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
