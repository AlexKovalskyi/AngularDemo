import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {EventsListComponent } from './events/events-list.component'
import {EventsAppComponent } from './events-app.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule{}