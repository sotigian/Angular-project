import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({
    selector: 'courses',
    template: `
    <input (keyup.enter)="onKeyUp()"/>`
})
export class CoursesComponent{
    onKeyUp() {
        console.log("ENTER was pressed");
    }
    
}