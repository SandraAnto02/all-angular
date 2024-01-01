import { Injectable } from '@angular/core';
import { Employee } from '../module/employee';
import { employees } from '../module/employee-list';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService 
{
  employeeList:Employee[];

  constructor() 
  { 
    this.employeeList=employees;
  }

  addEmployee(emp:Employee)
  {
    console.log(emp);
    this.employeeList.push(emp);
  }

  getEmployee():Employee[]
  {
    return this.employeeList;
  }
}
