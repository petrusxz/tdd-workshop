export class GithubRepositoryModel {
    created_at: string;
    description: string;
    language: string;
    name: string;
    updated_at: string;
    html_url: string;

    constructor(data?: any) {
        this.created_at = data.created_at;
        this.description = data.description;
        this.language = data.language;
        this.name = data.name;
        this.updated_at = data.updated_at;
        this.html_url = data.html_url;
    }
}
