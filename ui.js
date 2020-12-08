class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }


    //show userprofile
    showprofile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                        <span class="badge badge-success">Followers : ${user.followers}</span>
                        <span class="badge badge-info">Following : ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company : ${user.company}</li>
                            <li class="list-group-item">Website/Blog : ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since : ${user.creater_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    //show repos
    showrepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output+=`
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks : ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        //output repos 
        document.getElementById('repos').innerHTML = output;
    }


    //show alert function
    showalert(msg, classname) {
        //remove previous alert
        this.clearalert();

        //create div 
        const div = document.createElement('div');
        //add class
        div.className = classname;
        //add text
        div.appendChild(document.createTextNode(msg));
        //get container
        const container =  document.querySelector('.searchContainer');
        //get search box
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div,search);

        //set timeout for 3 sec
        setTimeout(() => {
            this.clearalert();
        },2000);
    }

    //clear alert function
    clearalert() {
        const current = document.querySelector('.alert');

        if(current) {
            current.remove();
        }
    }

    clearprofile() {
        this.profile.innerHTML = '';
    }
}