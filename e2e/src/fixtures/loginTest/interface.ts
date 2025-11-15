export interface UserCreds {
    username: string;
    password: string;
}

export interface LoginTestSuite {
    validCreds: UserCreds;
    invalidCreds: UserCreds;
}