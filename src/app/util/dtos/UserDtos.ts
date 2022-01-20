import { LanguageDetail } from "./LanguageDetail.class";

class User {
    email: string
    password: string
    constructor(email: string = "", senha: string = "") {
        this.email = email
        this.password = senha
    }
}

class UserDetailAuth {
    id: number;
    token: string;
    roles: string;
    constructor(id: number = 0, token: string = "", roles: string = "") {
        this.id = id
        this.token = token
        this.roles = roles
    }
}

class UserDetail {
    id: number
    name: string
    cpf: string
    telephone: string
    email: string
    password: string
    profile: string
    language: LanguageDetail
    roles: string
    active: boolean
    constructor(id: number = 0,
        name: string = "",
        cpf: string = "",
        telephone: string = "",
        email: string = "",
        password: string = "",
        profile: string = "",
        roles: string = "",
        language: LanguageDetail = new LanguageDetail(),
        active: boolean = true) {

        this.id = id
        this.name = name
        this.cpf = cpf
        this.telephone = telephone
        this.email = email
        this.password = password
        this.profile = profile
        this.language = language
        this.roles = roles
        this.active = active
    }
}

class UserPostDto {
    name: string
    cpf: string
    telephone: string
    email: string
    password: string
    profile: string
    languageID: number
    roles: string
    constructor(name: string = "",
        cpf: string = "",
        telephone: string = "",
        email: string = "",
        password: string = "",
        profile: string = "",
        roles: string = "",
        languageID: number = -1) {

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

class UserPutDto {
    id: number
    name: string
    cpf: string
    telephone: string
    email: string
    password: string
    profile: string
    languageID: number
    roles: string
    active: boolean
    constructor(id: number = 0,
        name: string = "",
        cpf: string = "",
        telephone: string = "",
        email: string = "",
        password: string = "",
        profile: string = "",
        roles: string = "",
        languageID: number = -1) {

        this.id = id
        this.name = name
        this.cpf = cpf
        this.telephone = telephone
        this.email = email
        this.password = password
        this.profile = profile
        this.languageID = languageID
        this.roles = roles
        this.active = true
    }
}

export { User, UserDetailAuth, UserDetail, UserPostDto, UserPutDto }