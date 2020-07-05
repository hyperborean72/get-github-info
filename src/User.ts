import { Repo } from "./Repo";

export class User {
    login: string;
    fullName: string;
    repoCount: number;
    followerCount: number;
    repos: Repo[];

    constructor(responseBody: any) {
        this.login = responseBody.login;
        this.fullName = responseBody.name;
        this.repoCount = responseBody.public_repos;
        this.followerCount = responseBody.followers;
    }
}