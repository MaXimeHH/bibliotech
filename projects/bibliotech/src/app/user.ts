export class User {
    id: number;
    password: string;
    role: string;
    email: string;

    constructor(id: number, password:string, role: string,  email: string) {
        this.id = id;
        this.password = password;
        this.role = role;
        this.email = email;
    }
}
