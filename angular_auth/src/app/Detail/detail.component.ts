import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userService } from '../shared/user.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
  })
  export class DetailComponent implements OnInit {

    user: any;

    constructor(
        private active: ActivatedRoute,
        private service: userService
    ){}

    ngOnInit(): void {
        this.active.params.subscribe(user => {
            console.log(user['Id'])
            this.service.getUser(user['Id']).subscribe(user => {
                this.user = user
                console.log(user)
            })
        })
        
    }

  }