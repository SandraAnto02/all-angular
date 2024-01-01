import { Component } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import { department } from '../module/employee-list';


@Component({
  selector: 'app-rective-form-demo',
  templateUrl: './rective-form-demo.component.html',
  styleUrls: ['./rective-form-demo.component.css']
})
export class RectiveFormDemoComponent 
{
 //myName:FormControl;

  eid:FormControl;
  ename:FormControl;
  salary:FormControl;
  empForm:FormGroup;
  depts=department;

  constructor()
  {
    this.eid=new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('[S][0-9]{3}')]);
    this.ename=new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('[A-Z]+')]);
    this.salary=new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('[0-9]+')]);


    this.empForm = new FormGroup({
      // eid:new FormControl(),
      //ename:new FormControl(),
      // salary:new FormControl(),
      
      eid:this.eid,
      ename:this.ename,
      salary:this.salary,
      dept:new FormControl()
     
    })
  }

}
