const signUpBtn = document.querySelector("#signup");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const inputs = document.querySelectorAll("input");

signUpBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    // ================== Empty Field Check ==================
    let emptyField = false;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.classList.add("emptyInput");
        emptyField = true;
      }
    });

    if (emptyField) return;

    // ================== Signup ==================
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });

    // Agar signup mein error ho
    if (error) {
      console.log(error.message);

      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.message,
      });

      return;
    }

    console.log("Signup Data:", data);

    // ================== Get User ID ==================
    const id = data.user?.id;

    console.log("User ID:", id);

    if (!id) {
      console.log("User ID not found");
      return;
    }

    // ================== User Name Insert ==================
    const { error: databaseError } = await client
      .from("user_data")
      .insert({
        user_id: id,
        name: userName.value,
      });

    if (databaseError) {
      console.log(databaseError.message);

      Swal.fire({
        icon: "error",
        title: "Database Error",
        text: databaseError.message,
      });

      return;
    }

    console.log("User data inserted successfully");

    // ================== Success ==================
    
    window.location.href = "../pages/dashboard.html";

  } catch (error) {
    console.log("Unexpected Error:", error);
  }
});


// ================== Remove Empty Error ==================

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("emptyInput");
  });
});