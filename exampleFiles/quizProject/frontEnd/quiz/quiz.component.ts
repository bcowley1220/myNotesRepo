import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { QuizService } from "../services/quiz.service";
import { Question } from "../interfaces/question";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService
      .getAllQuestions()
      .subscribe(response => (this.questions = response));
    // console.log(this.questionList);
  }

  submitQuiz(form: NgForm): void {
    this.quizService.calculateScore(form.value, this.questions);
    console.log(form.value.user_name);
    form.reset();
    this.quizService.navigateToResults();
  }
}
