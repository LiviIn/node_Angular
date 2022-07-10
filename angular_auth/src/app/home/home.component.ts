import { Component, OnInit } from '@angular/core';
import { userService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any;
  value: any;
  female: string | undefined;

  constructor(
    private service: userService,
  ){}

    ngOnInit(): void {
      this.service.getApi().subscribe((user) =>{
        console.log(user)
        this.users = user
      })
    }

    checkGender(){
      this.value = this.users.filter((user: any) => {
        return user.gender === 'female'
      })
      this.female = 'female Only Show' ;
      this.users = this.value
    }

    // NavToDetail(){
    //   this.router.navi
    // }
  
}