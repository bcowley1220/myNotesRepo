import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultsComponent } from "./results/results.component";
import { ScoresComponent } from "./scores/scores.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { QuizService } from "./services/quiz.service";

let appRoutes: Routes = [
  { path: "quiz", component: QuizComponent },
  { path: "results", component: ResultsComponent },
  { path: "scores", component: ScoresComponent },
  { path: "", redirectTo: "/quiz", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultsComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule {}
