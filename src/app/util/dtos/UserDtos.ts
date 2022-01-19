class User {
    email: string
    password: string
    constructor(email: string = "", senha: string = "") {
        this.email = email
        this.password = senha
    }
}

class UserDetail {
    id: number;
    token: string;
    roles: string;
    constructor(id: number = 0, token: string = "", roles: string = "") {
        this.id = id
        this.token = token
        this.roles = roles
    }
}

class UserPostDto{
    name: string
    cpf:	string
    telephone:	string
    email: string
    password: string
    profile:	string
    languageID:	number
    roles: string
    constructor(name: string="",
        cpf:string="",
        telephone:string="",
        email: string="",
        password: string="",
        profile:string="",
        roles: string="",
        languageID:number = -1){
        
        this.name = name
        this.cpf = cpf
        this.telephone = telephone
        this.email = email
        this.password = password
        this.profile = profile
        this.languageID = languageID
        this.roles = roles
    }
}

export { User, UserDetail,UserPostDto }