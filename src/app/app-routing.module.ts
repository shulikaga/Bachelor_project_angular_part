import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { AccountComponent} from './account/account.component';
import { SettingsComponent} from './settings/settings.component';
import { LoginComponent} from './microservices/login/login.component';

import { PlanerComponent} from './microservices/planer/planer.component';
import { ScoreComponent} from './microservices/score/score.component';
import { MicrolearningsComponent} from './microservices/microlearnings/microlearnings.component';
import { EventsComponent} from './microservices/events/events.component';
import { CourseComponent} from './microservices/course/course.component';
import { FeedbacksComponent} from './microservices/feedbacks/feedbacks.component';
import { FeedbackComponent} from './microservices/feedbacks/feedback/feedback.component';
import { EvaluationComponent} from './microservices/feedbacks/evaluation/evaluation.component';
import { ChatComponent} from './microservices/chat/chat.component';
import { ParticipantsListComponent} from './microservices/participants-list/participants-list.component';
import { ChecklistComponent} from './microservices/participants-list/checklist/checklist.component';

import { LogsComponent} from './microservices/logs/logs.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'login', component: LoginComponent},

  //micro services routes
  {path: 'planer', component: PlanerComponent},
  {path: 'score', component: ScoreComponent},
  {path: 'microlearnings', component: MicrolearningsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'course', component: CourseComponent},
  {path: 'feedbacks', component: FeedbacksComponent},
  {path: 'feedbacks/feedback', component: FeedbackComponent},
  {path: 'feedbacks/evaluation', component: EvaluationComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'participants-list', component: ParticipantsListComponent},
  {path: 'participants-list/checklist', component: ChecklistComponent},
  {path: 'logs', component: LogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
