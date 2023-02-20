export class CourseDTO {
    id:number;
    courseName:string;
    duration:number;

    constructor(
        id:number,
        courseName:string,
        duration:number
    )
    {
        this.id = id;
        this.courseName = courseName;
        this.duration = duration;
    }
}
