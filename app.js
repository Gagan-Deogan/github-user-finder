//init git class
const github =new GitHub;

// search input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup',(e) =>{
    // input value
    const userText = e.target.value;
    if(userText !==' '){
        // Make http call
        github.getUser(userText)
        .then(data =>{
            if(data.profile.meassage === 'Not Found'){
                //show alert

            }else{
                //show profile

            }
        })
    }else{
        // Clear profile

    }
});
//searchUser.addEventListener()