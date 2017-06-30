import { Component, OnInit, Input, Pipe, PipeTransform, Output, EventEmitter } from '@angular/core';
import { JeopardyService } from '../jeopardy.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

@Output() refresh = new EventEmitter();

@Input() 
question;//the entire dataset pushed from app.component.ts
releventCategory:string; //the category selected by the user
releventAnswer:string;//what the contestant guessed
catAnswer: string;//what the correct answer should be
yourScore: number = 0 //running total of contentant score
quesValue: number  //value of question being quessed at
resultMessage: string;  //what to return if answer is wrong
answer: string = ""

//set variables based on the users selection of a category, capture the value and the answer
submit(thatCatChoice, thatCatAnswer, thatQuesValue){
  this.releventCategory = thatCatChoice;
  this.catAnswer = thatCatAnswer;
  this.quesValue = thatQuesValue;
  this.resultMessage = ""
  console.log("the correct answer is: " + this.catAnswer)
  
}

//compare answer, provide user feedback, update score and provide new questions
response(rcdAnswer){
  this.releventAnswer = rcdAnswer;
  if (this.releventAnswer.toUpperCase() == this.catAnswer.toUpperCase()){ //convert guessed answer and actual answer to upper case for easier comparison
    this.yourScore += this.quesValue;
    this.resultMessage = `That is the correct answer - congratulations: ${this.catAnswer}`
    console.log("right")
  }else{
    this.resultMessage = `I'm sorry that is incorrect, the correct answer is: ${this.catAnswer}`
    console.log("wrong")
  }
  // this.elRef.nativeElement.querySelector('#userInput').reset()
  this.answer = '';
  this.refresh.emit();
}


 constructor(private JeopardyDataService: JeopardyService) { }

  ngOnInit() {
  }

}