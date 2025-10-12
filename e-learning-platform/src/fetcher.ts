import { ApiResponse, User } from "./models";


export function fetchUser(id: number): ApiResponse<User> {
const db: User[] = [
    { id: 1, name: "Mouk", role: "student", email: "mouk@gmail.com" },
    { id: 2, name: "Mbh", role: "teacher" },
];


const user = db.find((u) => u.id === id);
if (user) {
    return { data: user };
}
    return { error: `User with id ${id} not found` };
}