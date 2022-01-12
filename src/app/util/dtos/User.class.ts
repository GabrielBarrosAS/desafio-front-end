export class User {
    email: string
    senha: string
    roles: string[]
    constructor(email:string = "",senha:string = "",roles: string[] = []){
        this.email = email
        this.senha = senha
        this.roles = roles
    }
}