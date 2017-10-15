import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { KnobsComponent } from './knobs/knobs.component';
import { HelloWrapperComponent } from './hello/hello-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    KnobsComponent,
    HelloWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
