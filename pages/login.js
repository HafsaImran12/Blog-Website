const loginBtn = document.querySelector("#loginBtn")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
console.log("Login page");

loginBtn.addEventListener("submit", async (event) => {
    event.preventDefault()
    console.log("hello");
    const { data, error } = await client.auth.signInWithPassword({
        email:email.value,
        password:password.value,
    })
    if (data) {
        console.log(data);
    } else {
        console.log(error);
    }
    window.location.href = "./home.html"
})