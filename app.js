//init git class
const github =new GitHub;
// ui class
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup',(e) =>{
    // input value
    const userText = e.target.value;

    if(userText !==''){ 
        // Make http call
        github.getUser(userText)
        .then(data =>{
            if(data.profile.message === 'Not Found'){
                ui.showAlert("profile Not Found","alert alert-danger");
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repositry);
            }
        });
    }else{
        ui.clearUi();

    }
});
