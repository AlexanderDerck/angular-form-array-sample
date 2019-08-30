import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { ThingComponent } from './thing/thing.component';
import { ThingsComponent } from './things/things.component';
@NgModule({
  imports: [BrowserModule,  BrowserAnimationsModule, ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
      MatSlideToggleModule,
    FlexLayoutModule],
  declarations: [AppComponent, ThingsComponent, ThingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
