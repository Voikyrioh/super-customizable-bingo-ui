export type Login = {
    username: string
    password: string
}

export type Register = {
    accountId: string,
    password: string,
    confirmPassword: string,
    email?: string,
    username?: string}

export type LoggedUser = {
    user_id: string
    username: string
}
