"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    remove(id) {
        this.items.splice(id, 1);
    }
    getAll() {
        return this.items;
    }
}
exports.UserRepository = UserRepository;
