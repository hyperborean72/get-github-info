import * as request from 'request';
import { User } from './User';


export class GithubApiService {

    getUserInfo(username: string) {

        let options = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        }

        request.get('https://api.github.com/users/' + username, options, (error: any, response: request.Response, body: any) => {
            // console.log(response);
            console.log(body);
            // console.error();
            /* either JSON.parse or add 'json' header
            let user = new User(JSON.parse(body)); */
            let user = new User(body);
            //console.log(user);
            
        })
    }

    getReposInfo() {

    }
}