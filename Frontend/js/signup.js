const nameInput = document.getElementById('name')
const familyInput = document.getElementById('family')
const emailInput = document.getElementById('email')
const passInput = document.getElementById('pass')
const ageInput = document.getElementById('age')
const button = document.getElementById("register")


button.addEventListener('click', async (e) => {
e.preventDefault();
const res =await fetch("http://localhost:9000/users",{
    method: "POST",
    body: JSON.stringify({
        name:nameInput.value,
        family:familyInput.value,
        email:emailInput.value,
        password:passInput.value,
        age:ageInput.value}),
    headers:{'content-type':'application/json'}
})
const data = await res.json()
console.log(data)

})