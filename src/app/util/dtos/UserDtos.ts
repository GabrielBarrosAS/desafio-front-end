class User {
    email: string
    password: string
    roles: string[]
    constructor(email: string = "", senha: string = "", roles: string[] = []) {
        this.email = email
        this.password = senha
        this.roles = roles
    }
}

class UserDetail {
    id: number;
    token: string;
    roles: string;
    status: number;
    constructor(id: number = 0, token: string = "", roles: string = "", status: number = 0) {
        this.id = id
        this.token = token
        this.roles = roles
        this.status = status
    }
}

export { User, UserDetail }