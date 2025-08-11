export type Login = {
    username: string
    password: string
}

export type Register = Login & { confirmPassword: string, email?: string, shownName?: string}

export type LoggedUser = {
    id: string
    shownName: string
    username: string
    email: string
}
