const loginBtn = document.querySelector("#loginBtn");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const inputs= document.querySelectorAll("input");

loginBtn.addEventListener("submit", async (event) => {
    event.preventDefault();

  // ================== Empty Field Check ==================
  let emptyField = false;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.classList.add("emptyInput");
      emptyField = true;
    }
  });

  if (emptyField) return;
  
  // ================== LogIn ==================
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
    
  if (error) {
      console.log(error.message);
      
      Swal.fire({
          icon: "error",
          title: "Login Failed",
        text: error.message,
    });
    
    return;
}else {
  console.log(data);
  window.location.href = "../pages/dashboard.html";
  } 
  
});

// ================== Remove Empty Error ==================

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("emptyInput");
  });
});
