abstract class Course{
    constructor(public title: string){}
    abstract getDescription():string;
}

export class VideoCourse extends Course{
    constructor(title:string,public duration:number){
        super(title);
    }
    getDescription():string{
        return 'this is the '+this.title+' videoCourse that lasted '+this.duration;
    }
}

export class LiveCourse extends Course {
    constructor(title:string,public date : Date){
        super(title);
    }
    getDescription(): string {
        return 'this is the '+this.title+' liveCourse done on '+this.date;
    }
}