const userName = document.querySelector("#userName")
const userEmail = document.querySelector("#userEmail")
const logout = document.querySelector("#logout")

let getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user.email);

    userName.innerHTML = data.user.email
}

logout.addEventListener("click", async (event) => {
    event.preventDefault()
    const { error } = await client.auth.signOut()
    if (error) {
        console.log(error);
    }
    window.location.href = "../index.html"
})