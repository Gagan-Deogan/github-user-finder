// search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e) =>{
    const userText = e.target.value;
    if(userText !==' '){
        console.log(userText);
    }
});

// search inpu event listener
//searchUser.addEventListener()