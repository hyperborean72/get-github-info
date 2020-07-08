import * as request from 'request';
import { User } from './User';
import { Repo } from "./Repo";


const options = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}

export class GithubApiService {


    getUserInfo(username: string, callbackFn: (user: User) => any) {

        request.get('https://api.github.com/users/' + username, options, (error: any, response: request.Response, body: any) => {
            // console.log(response);
            // console.error();
            console.log(body);
            /* either JSON.parse or add 'json' header
            let user = new User(JSON.parse(body)); */
            let user = new User(body);
            callbackFn(user);            
        })
    }

    getReposInfo(username: string, callbackFn: (repos: Repo[]) => any) {        

        request.get('https://api.github.com/users/' + username + '/repos', options, (error: any, response: request.Response, body: any[]) => {
            console.log(body);
            let repos: Repo[] = body.map(repo => new Repo(repo));
            callbackFn(repos);            
        })
    }
}