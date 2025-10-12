"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveCourse = exports.VideoCourse = void 0;
class Course {
    constructor(title) {
        this.title = title;
    }
}
class VideoCourse extends Course {
    constructor(title, duration) {
        super(title);
        this.duration = duration;
    }
    getDescription() {
        return 'this is the ' + this.title + ' videoCourse that lasted ' + this.duration;
    }
}
exports.VideoCourse = VideoCourse;
class LiveCourse extends Course {
    constructor(title, date) {
        super(title);
        this.date = date;
    }
    getDescription() {
        return 'this is the ' + this.title + ' liveCourse done on ' + this.date;
    }
}
exports.LiveCourse = LiveCourse;
