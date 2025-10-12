"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = fetchUser;
function fetchUser(id) {
    const db = [
        { id: 1, name: "Mouk", role: "student", email: "mouk@gmail.com" },
        { id: 2, name: "Mbh", role: "teacher" },
    ];
    const user = db.find((u) => u.id === id);
    if (user) {
        return { data: user };
    }
    return { error: `User with id ${id} not found` };
}
