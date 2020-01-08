class GitHub{
    constructor(){
        this.client_id = '4e36a65f319b0c7ace40';
        this.client_secret = '3cff673a7fd6df66f8535657fc03b0f360da2dc9';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();

        return{
        
        }

    }
}