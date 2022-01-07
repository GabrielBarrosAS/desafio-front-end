export class User {
    email: string | undefined
    senha: string | undefined

    constructor(email:string = "",senha:string = ""){
        this.email = email
        this.senha = senha
    }
}