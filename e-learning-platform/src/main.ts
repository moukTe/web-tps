import {User} from './models'
import { UserRepository } from './repositories';
import { VideoCourse } from './courses';
import { LiveCourse } from './courses';
import { fetchUser } from './fetcher';

const melek : User= {id:1,name:'melek',role:'student'};
const mbh : User= {id:1,name:'mbh',role:'teacher'};

const userRepo = new UserRepository;
userRepo.add(melek);
userRepo.add(mbh);

const VC1= new VideoCourse('vidC1',60);
const LC= new LiveCourse('LC1',new Date(Date.now() + 1000 * 60 * 60 * 24));

console.log(VC1.getDescription());
console.log(LC.getDescription());
console.log("Users in repository:", userRepo.getAll());


console.log(fetchUser(1));
console.log(fetchUser(42));