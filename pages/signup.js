const signUpBtn = document.querySelector("#signup");
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

    window.location.href = "./home.html";
  } catch (error) {
    console.log(error);
  }
});
