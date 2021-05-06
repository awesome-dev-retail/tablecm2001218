export interface StandardResponse {
    code: number,
    msg: string,
    data: any
}

export interface UserCredential {
    username: string,
    password: string | null
}
