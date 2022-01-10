export class User {
    email: string | undefined
    senha: string | undefined
    roles: string[] | undefined
    constructor(email:string = "",senha:string = "",roles: string[] = []){
        this.email = email
        this.senha = senha
        this.roles = roles
    }
}