export interface IUser {
    id?: number;
    name?: string;
    login?: string;
    avatar_url?: string;
    followers?: number;
    following?: number;
    repos_url?: string;
}

export interface IRepositories {
    id?: number;
    name?: string;
    description?: string;
}
