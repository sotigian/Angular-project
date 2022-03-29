import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({
    selector: 'courses',
    template: `<table>
        <tr>
            <td [attr.colspan]="colSpan">Cell 1<td>
        </tr>
    </table>`
})
export class CoursesComponent{
    colSpan = 2;
    
}