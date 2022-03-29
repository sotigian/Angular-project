import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({
    selector: 'courses',
    template: `
    <button (click)="onSave()">Submit</button>`
})
export class CoursesComponent{
    onSave() {
        console.log("Button was clicked");
    }
    
}