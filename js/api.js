function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
}


  function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(infodata=>console.log(infodata));
  }

  function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUsers(data));
  }


function displayUsers(data){     // any type name can use as parameter
    const ul=document.getElementById('users');
    for(const user of data){     
        // console.log(user.name);
        const li=document.createElement("li");
        li.innerText=`Name:${user.name} Email: ${user.email}`;
        ul.appendChild(li);
    }
}