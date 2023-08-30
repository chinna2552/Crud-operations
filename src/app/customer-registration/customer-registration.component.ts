import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {
  customerName: string = '';
  customerEmail: string = '';
  customerAddress: string = '';

  onSubmit() {
    const newCustomer = {
      name: this.customerName,
      email: this.customerEmail,
      address: this.customerAddress
    };

    const storedCustomers = localStorage.getItem('customers') || '[]';
    const customers = JSON.parse(storedCustomers);
    customers.push(newCustomer);
    localStorage.setItem('customers', JSON.stringify(customers));
    alert('Customer Registration successful!');
    this.resetForm();

  }
  resetForm() {
    this.customerName = '';
    this.customerEmail = '';
    this.customerAddress = '';
  }

}

