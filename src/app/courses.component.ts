import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({
    selector: 'courses',
    template: `{{text | summary : 10}}`
})
export class CoursesComponent{
    text = `Lorem, ipsum dolor sit amet consectetur
           adipisicing elit. Odio, voluptatibus!`;
    
}