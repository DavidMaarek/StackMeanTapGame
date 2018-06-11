import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GameService } from "../../services/game/game.service";

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  token: string;
  scores;

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/']);
    }else{
      this.token = localStorage.getItem('token');
      this.gameService.getScores(this.token).then(data => {
        if(data['error']){
        }else{
          this.scores = data['scores'].reverse();
        }
      });
    }
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
