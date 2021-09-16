import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  storeEmployee(empRef:any){
    //console.log(empRef);
    this.employeeService.createEmployee(empRef);
  }
}
