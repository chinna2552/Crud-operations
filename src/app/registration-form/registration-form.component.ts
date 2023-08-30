import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
  name: FormControl = new FormControl();
  email: FormControl = new FormControl();
  phoneNumber: FormControl = new FormControl();
  address: FormControl = new FormControl();

  
  customerArray: any[] = [];
  editingCustomer: any = null;
  showRegistrationForm = false;

  @Output() cancel = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.http.get("http://localhost:3000/users/customer").subscribe((resultData: any) => {
      this.customerArray = resultData;
    });
  }

  setDelete(data: any){
    this.http.delete("http://localhost:3000/users/customer" + "/" + data._id).subscribe((resultData: any) => {
      this.getAllCustomers();
    });
  }

  setUpdate(data: any){
    this.name.setValue(data.name);
    this.email.setValue(data.email);
    this.phoneNumber.setValue(data.phoneNumber);
    this.address.setValue(data.address);
    
    this.showRegistrationForm = true;
    this.editingCustomer = data;
  }

  save() {
    if (this.editingCustomer) {
      this.updateCustomer();
    } else {
      this.addCustomer();
    }

    this.clearForm();
    this.showRegistrationForm = false;
  }

  updateCustomer() {
    const bodyData = {
      "name": this.name.value,
      "email": this.email.value,
      "phoneNumber": this.phoneNumber.value,
      "address": this.address.value
    };

    const customerIdToUpdate = this.editingCustomer._id;

    this.http.put("http://localhost:3000/users/customer" + "/" + customerIdToUpdate, bodyData)
      .subscribe((resultData: any) => {
        this.getAllCustomers();
      });
  }

  addCustomer() {
    const bodyData = {
      "name": this.name.value,
      "email": this.email.value,
      "phoneNumber": this.phoneNumber.value,
      "address": this.address.value
    };

    this.http.post("http://localhost:3000/users/customer", bodyData)
      .subscribe((resultData: any) => {
        this.getAllCustomers();
      });
  }

  clearForm() {
    this.name.setValue("");
    this.email.setValue("");
    this.phoneNumber.setValue("");
    this.address.setValue("");
    this.editingCustomer = null;
  }

  onCancel() {
    this.clearForm();
    this.showRegistrationForm = false;
    this.cancel.emit();
  }
}