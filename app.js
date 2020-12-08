//intiating 'GitHub' class
const github = new GitHub;

//intiating 'UI' class
const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e)=>{

    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        
        //make http call
        github.getUser(userText)
            .then(data => {
                if( data.profile.message === 'Not Found') {
                    //show alert
                    ui.showalert('User Not Found','alert alert-danger');
                }else {
                    //show profile
                    ui.showprofile(data.profile);
                    ui.showrepos(data.repos);
                }
            })
    }else {
        //clear profile
        ui.clearprofile();
    }
});