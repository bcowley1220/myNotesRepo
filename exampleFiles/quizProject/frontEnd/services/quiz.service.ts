import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Question } from "../interfaces/question";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  submittedAnswers: any;
  quizQuestions: any;
  score: number = 0;

  constructor(private http: HttpClient, private router: Router) {}

  getAllQuestions(): Observable<any> {
    return this.http.get("http://localhost:8000/questions");
  }
  getAllScores(): Observable<any> {
    return this.http.get("http://localhost:8000/scores");
  }

  addScore(user_name: string, score: number): Observable<any> {
    return this.http.post("http://localhost:8000/scores", { user_name, score });
  }

  calculateScore(form: any, questions: any): any {
    console.log(form, questions);
    this.submittedAnswers = form;
    this.quizQuestions = questions;
    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer) {
        this.score++;
      }
    }
    console.log(this.score);
    this.addScore(form.user_name, this.score).subscribe();
  }

  returnCurrentAnswers() {
    return this.submittedAnswers;
  }

  returnQuizQuestions() {
    return this.quizQuestions;
  }

  returnScore(): number {
    return this.score;
  }

  navigateToResults() {
    this.router.navigate(["results"]);
  }
  navigateToQuiz() {
    this.router.navigate(["quiz"]);
  }
  navigateToScores() {
    this.router.navigate(["scores"]);
  }
}
