

const logout = document.querySelector("#logout")


logout.addEventListener("click",async(event)=>{
    event.preventDefault()
    const { error } = await client.auth.signOut()
    if(error){
        console.log(error);
    }
    window.location.href = "../index.html"
})