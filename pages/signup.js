const signUpBtn = document.querySelector("#signup");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

signUpBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    console.log("run");

    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (data) {
      console.log(data);
    } else {
      console.log(error.message);
    }

    const { error: } = await client
  .from('user_table')
  .insert({ id, name: name })

    window.location.href = "./home.html";
  } catch (error) {
    console.log(error);
  }
});
