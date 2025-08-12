import type { LoggedUser, Login, Register } from "./type.ts";

async function postData<Response>(url: string, donnees: Record<string, unknown>|undefined|null, token?: string): Promise<Response> {
    const body = donnees ? JSON.stringify(donnees) : undefined;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (token) headers.append('Authorization', `Bearer ${token}`);

    const response = await fetch(url, {
        body,
        mode: 'cors',
        credentials: 'include',
        cache: 'no-cache',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        method: 'POST',
        headers
    });

    return await response.json();
}

async function getData<Response>(url: string, token?: string): Promise<Response> {
    const headers = new Headers();
    if (token) headers.append('Authorization', `Bearer ${token}`);

    const response = await fetch(url, {
        mode: 'cors',
        credentials: 'include',
        cache: 'no-cache',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        method: 'GET',
        headers
    });

    return await response.json();
}

export async function signUp(form: Register) {
    const resp = await postData<void>('http://localhost:3000/api/v1/auth/signup', form)

    return resp
}

export async function login(form: Login): Promise<string> {
    const resp = await postData<{ token: string }>('http://localhost:3000/api/v1/auth/login', form)

    return resp.token
}

export async function userInfos(token: string): Promise<LoggedUser> {
    const resp = await getData<LoggedUser>('http://localhost:3000/api/v1/user/info', token)

    return resp
}
