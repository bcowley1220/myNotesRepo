import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";
@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  scores: any;
  score: number;
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService
      .getAllScores()
      .subscribe(response => (this.scores = response));
  }
}
