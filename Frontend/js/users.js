const userContainer = document.querySelector(".userContainer");

window.addEventListener('load',async ()=>{
    const res = await fetch('http://localhost:9000/users')
    const dataUsers = await res.json()
    console.log(dataUsers)
    dataUsers.map((user) => (
        userContainer.innerHTML += `<div class="user">
               <p><b>name</b> : ${user.name}</p>
               <p><b>family</b> : ${user.family}</p>
               <p><b>email</b> : ${user.email}</p>
               <p><b>password</b> : ${user.password}</p>
               <p><b>age</b> : ${user.age}</p>
               <button onclick="deleteUserById('${user._id}')">delete user</button>
            </div>`

    ))
})