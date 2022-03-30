import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({
    selector: 'courses',
    template: `{{course.title | uppercase }} <br>
    {{course.students | number}} <br>
    {{course.rating | number:'2.2-3'}}<br>
    {{course.price | currency: "EUR"}}<br>
    {{course.releasedDate | date: 'shortDate'}}`
})
export class CoursesComponent{
    course = {
        title: "The complete Angular course",
        students: 30123,
        rating: 4.9745,
        price:190.95,
        releasedDate: new Date(2016,2,3)
    }
    
}