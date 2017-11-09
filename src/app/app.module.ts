import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { masterFirebaseConfig} from './api-keys';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent} from './about/about.component';
import { routing } from './app.routing';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EventService } from './event.service';
import { EditComponent } from './edit/edit.component';
import { AdminComponent } from './admin/admin.component';
import { AddFormComponent } from './add-form/add-form.component';
import { CategoryFilterPipe } from './category-filter.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    ListComponent,
    DetailComponent,
    EditComponent,
    AdminComponent,
    AddFormComponent,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
