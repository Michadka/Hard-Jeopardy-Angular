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

submit(catChoice){
  this.releventCategory = catChoice;
}

    btn(){
      this.JeopardyDataService.getRecords()
        .subscribe(
          questions => {
            this.question = questions; 
            //console.log(this.questions);
            // this.successMessage = "got stuff"
          }
        );
    }


 constructor(private JeopardyDataService: JeopardyService) { }

  ngOnInit() {
  }

}