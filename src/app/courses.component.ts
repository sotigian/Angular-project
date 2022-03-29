import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({
    selector: 'courses',
    template: `
    <button (click)="onSave($event)">Submit</button>`
})
export class CoursesComponent{
    onSave($event: any) {
        console.log($event);
    }
    
}