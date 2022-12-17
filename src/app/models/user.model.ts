export class User {
    id: number | undefined;
    username: string | undefined;
    email: string | undefined;
    access!: string;
    refresh: string | undefined;
    group: [] | undefined;
    user_info: UserInfo | undefined;
}

export class UserInfo {
    birthday: Date | undefined;
    telephone: string | undefined;
    picture: string | undefined;
}