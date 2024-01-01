import { Component } from '@angular/core';
import { department } from '../module/employee-list';
import { Employee } from '../module/employee';
import { EmployeeService} from '../service/employee.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent 
{
  departments:string[];
  emp:Employee;
  employeelist:Employee[];
  hasError:boolean = false;

  constructor(private eService:EmployeeService)
  {
    this.departments=department;
    this.emp = new Employee('','','','')
    this.employeelist = this.eService.getEmployee();
  }

  validate(data:string)
  {
    if(data === 'default') 
      this.hasError=true
      else
      this.hasError=false
  }
  dataSubmited()
  {
    console.log(this.emp);
    this.eService.addEmployee(this.emp);

  }

}
