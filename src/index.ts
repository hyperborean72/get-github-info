import { GithubApiService } from "./GithubApiService";

let service = new GithubApiService();
service.getUserInfo('hyperborean72', user => console.log(user));
service.getReposInfo('hyperborean72', repos => console.log(repos));