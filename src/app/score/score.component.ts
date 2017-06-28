import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { JeopardyService } from '../jeopardy.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

@Input() question;
catChoice: string;
releventCategory:string;
releventAnswer:string;

submit(catChoice){
  this.releventCategory = catChoice;
}

response(answer){
  this.releventAnswer = answer;
  console.log(this.releventAnswer)
}


 constructor(private JeopardyDataService: JeopardyService) { }

  ngOnInit() {
  }

}