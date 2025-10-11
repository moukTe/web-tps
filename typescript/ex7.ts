function identity <T>(value: T): T {
    return value;
};

function getFirst <T>(arr: T[]): T| undefined{
    return arr[0];
};

// 3. Repository class
class Repository<T> {
    private tab: T[] = [];

    add(item: T) {
    this.tab.push(item);
}

    remove(index: number) {
    this.tab.splice(index, 1);
}

    getAll(): T[] {
    return this.tab;
}
}

//interface ApiResponse<T> avec les propriétés data: T et error?: string.
interface ApiResponse<T> {
    data: T,
    error?: string
}