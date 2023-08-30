import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  name: FormControl = new FormControl();
  email: FormControl = new FormControl();
  password: FormControl = new FormControl();



  StudentArray : any[] = [];
  currentStudentId = "";


  constructor(private http: HttpClient) {
    this.getAllstudent();
   }
   getAllstudent(){

    this.http.get("http://localhost:3000/users/users").subscribe((resultData: any) => {
    console.log(resultData);
    this.StudentArray = resultData;
    });
   }
   setDelete(data: any){
    console.log(data)

    this.http.delete("http://localhost:3000/users/users" + "/" + data._id).subscribe((resultData: any) => {
      console.log(resultData);
      alert("student deleted")
      this.getAllstudent();
    });

   }
   setUpdate(data: any) {
    console.log(data)

    this.name.setValue(data.name);
    this.email.setValue(data.email);
    this.password.setValue(data.password);

    this.currentStudentId = data._id;
    

   }
   UpdateRecords(){
    console.log(this.currentStudentId)


    let bodyData = {
      "name": this.name.value,
      "email": this.email.value,
      "password": this.password.value
    };
    this.http.put("http://localhost:3000/users/users" + "/"+ this.currentStudentId, bodyData).subscribe((resultData: any) =>{

    console.log(resultData);
    alert("Student registered update")
    this.getAllstudent();

    this.name.setValue('');
    this.email.setValue('');
    this.password.setValue('');
    this.currentStudentId = '';
    });
   }
   save(){
    if (this.currentStudentId == ''){
      this.register();

    }else{
      this.UpdateRecords();
    }
   }
    

  register() {
    let bodyData = {
      "name": this.name.value,
      "email": this.email.value,
      "password": this.password.value
    };
    this.http.post("http://localhost:3000/users/users/register", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student registered successfully!");

      this.name.setValue('');
      this.email.setValue('');
      this.password.setValue('');
      this.getAllstudent();
    });
  }
}





