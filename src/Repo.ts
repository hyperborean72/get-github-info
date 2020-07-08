export class Repo {
    name: string;
    url: string;
    description: string;
    forkCount: number;
    size: number;
    
    constructor(responseBody: any) {
        this.name = responseBody.name;
        this.url = responseBody.html_url;
        this.description = responseBody.description;
        this.forkCount = responseBody.forks_count;
        this.size = responseBody.size;
    }
}