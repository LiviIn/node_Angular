import { Component, OnInit } from '@angular/core';
import { userService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
    this.api.loginUser(data.form.value)
  }
}
