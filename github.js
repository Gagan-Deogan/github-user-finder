class GitHub{
    constructor(){
        this.client_id = '4e36a65f319b0c7ace40';
        this.client_secret = '3cff673a7fd6df66f8535657fc03b0f360da2dc9';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
            
        const profile = await profileResponse.json();
        const repositry = await repoResponse.json();

        return {
            profile : profile, //also profile
            repositry : repositry
        }

    }
}