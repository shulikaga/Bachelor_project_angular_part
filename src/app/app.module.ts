import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule} from './material';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { PlanerComponent } from './microservices/planer/planer.component';
import { ScoreComponent } from './microservices/score/score.component';
import { MicrolearningsComponent } from './microservices/microlearnings/microlearnings.component';
import { ChatComponent } from './microservices/chat/chat.component';
import { LogsComponent } from './microservices/logs/logs.component';
import { ParticipantsListComponent } from './microservices/participants-list/participants-list.component';
import { FeedbacksComponent } from './microservices/feedbacks/feedbacks.component';
import { FeedbackComponent } from './microservices/feedbacks/feedback/feedback.component';
import { EvaluationComponent } from './microservices/feedbacks/evaluation/evaluation.component';
import { EventsComponent } from './microservices/events/events.component';
import { LoginComponent } from './microservices/login/login.component';
import { CourseComponent } from './microservices/course/course.component';
import { QuizComponent } from './microservices/microlearnings/quiz/quiz.component';
import { ResultsComponent } from './microservices/microlearnings/results/results.component';
import { ChecklistComponent } from './microservices/participants-list/checklist/checklist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    SettingsComponent,
    PlanerComponent,
    ScoreComponent,
    MicrolearningsComponent,
    ChatComponent,
    LogsComponent,
    ParticipantsListComponent,
    FeedbacksComponent,
    FeedbackComponent,
    EvaluationComponent,
    EventsComponent,
    LoginComponent,
    CourseComponent,
    QuizComponent,
    ResultsComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
