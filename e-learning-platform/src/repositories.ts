import {User} from './models';

interface Repository<T>{
    add(item:T):void;
    remove(id:number):void;
    getAll():T[];
}

export class UserRepository implements Repository<User>{
    private items:User[]=[];
    
    add(item:User):void{
        this.items.push(item)
    }
    remove(id:number):void{
        this.items.splice(id,1)
    }
    getAll(): User[] {
        return this.items
    }
}
