import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GameService } from "../../services/game/game.service";
import { CredentialService } from "../../services/credential/credential.service";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor(
    private credentialService: CredentialService,
    private gameService: GameService,
    private router: Router
  ) { }

  // Data
  score: number = 0;
  token: string = '';
  user = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  color = 0;

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/']);
    }else{
      this.token = localStorage.getItem('token');
      this.credentialService.getDataFromToken(this.token).then(data => {
        if(data['error']){
          console.log('Error');
        }else{
          this.user = data['user'];
        }
      });
    }
  }

  start: boolean = false;
  finish: boolean = false;
  timer;
  count: number = 0;

  startGame(){
    if(!this.finish){
      if(this.color){
        this.color = 0;
      }else{
        this.color = 1;
      }
      if(this.start){
        this.score++;
      }else{
        let that = this;
        this.start = true;
        this.score++;
        this.timer = setInterval(function(){
          that.count++;
          if(that.count === 10){
            that.finish = true;
            clearInterval(that.timer);
            that.sendScore();
          }
        },1000)
      }
    }
  }

  sendScore(){
    this.gameService.saveTap(localStorage.getItem('token'), {
      id_user: this.user._id,
      score: this.score
    }).then(data => {
      if(!data['error']){
        this.router.navigate(['/tap']);
      }
    });
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
