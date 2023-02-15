export class Course {
    courseId:number;
    courseName:string;
   duration:number;
   category:string;
   courseOwner:string;
   imageName:string;
   about:string;
   discount:number;
   price:number;

    

    constructor(
        courseId:number,
        courseName:string,
        duration:number,
        category:string,
        courseOwner:string,
        imageName:string,
        about:string,
        discount:number,
        price:number
    )
    {
          this.courseId = courseId;
          this.courseName = courseName;
          this.duration = duration;
          this.category = category;
          this.courseOwner = courseOwner;
          this.imageName = imageName;
          this.about = about;
          this.discount = discount;
          this.price = price;
    }
}//end of class