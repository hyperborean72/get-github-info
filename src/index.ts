import { GithubApiService } from "./GithubApiService";
import * as _ from 'lodash';

const USERNAME = 'hyperborean72';

//supply name of the GitHub user on the command line following 'npm start'
let uname = process.argv[2];

let service = new GithubApiService();
service.getUserInfo(uname, 
    user => service.getReposInfo(uname, 
        repos => { 
            let sortedRepos = _.sortBy(repos, repo => repo.description);
            user.repos = sortedRepos;
            console.log(user)
        }
    ));