import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
import { userService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];
  public form: any;

  constructor(
    private api: userService
  ) { }

  ngOnInit(): void {
  }
  emailRegex  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  async submit(data: any){
    this.form = data
    // console.log(data.form.value)
    this.api.registerUser(data.form.value)
  }

}
