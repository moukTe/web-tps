export class Repository<T> {
    private items: T[]=[];
    add(item:T): void{
        this.items.push(item);
    }

    remove(item:T):void{
        const index =this.items.indexOf(item);
        if (index>-1) this.items.splice(index,1);
    }

    getAll(): T[]{
        return this.items;
    }

    find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }
}