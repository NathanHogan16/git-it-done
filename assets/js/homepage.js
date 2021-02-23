let getUserRepos = ()=> {
    let response = fetch("https://api.github.com/users/octocat/repos");
    console.log(response);
};

getUserRepos();