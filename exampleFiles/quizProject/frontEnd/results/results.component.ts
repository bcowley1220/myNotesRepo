import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  constructor(private quizService: QuizService, private router: Router) {}
  submittedAnswers: any;
  questions: any;
  score: number;
  disabled: boolean = true;

  ngOnInit() {
    this.questions = this.quizService.returnQuizQuestions();
    this.submittedAnswers = this.quizService.returnCurrentAnswers;
    this.score = this.quizService.returnScore();
    if (!this.questions) {
      this.quizService.navigateToQuiz();
    }
  }

  navigateToScores() {
    this.router.navigate(["scores"]);
  }
}
