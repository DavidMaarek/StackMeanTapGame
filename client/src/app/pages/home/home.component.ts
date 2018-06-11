import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  userRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  cgv: boolean = false;

  userLogin = {
    email: '',
    password: ''
  };

  show_form: string = 'login';

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/me']);
    }
  }

  onSubmitLogin(){
    this.userService.doLogin(this.userLogin).then(user => {
      if(!user['error']){
        localStorage.setItem('token', user['token']);
        this.router.navigate(['/me'])
      }else{
        console.log(user);
      }
    });
  }

  onSubmitRegister(){
    this.userService.doRegister(this.userRegister).then(user => {
      if(!user['error']){
        this.show_form = 'login';
      }else{
        console.log(user);
      }
    });
  }

}
