import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {EventsListComponent } from './events/events-list.component'
import {EventsAppComponent } from './events-app.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent,
    EventsListComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule{}