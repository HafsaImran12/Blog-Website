const userProfile = document.querySelectorAll(".userProfile");
const userEmail = document.querySelectorAll(".userEmail");
const logouts = document.querySelectorAll(".logout");
const userName = document.querySelectorAll(".userName");

async function getUser() {
  console.log("run");

  // ================== getUser ==================

  // ----- GET EMAIL -----
  const {
    data: { user },
  } = await client.auth.getUser();

  console.log(user.email);
  userEmail.forEach((email) => {
    email.innerHTML = user.email;
  });
  // ================== selectUser ==================

  const { data, error } = await client
    .from("user_data")
    .select("name")
    .eq("user_id", user.id);

  console.log(data);

  // ----- GET NAME -----
  let name = data[0].name;
  console.log(name);

  userName.forEach((element) => {
    element.innerHTML = name;
  });

  // ----- GET NAME INITIAL -----

  let initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
  console.log(initials);

  userProfile.forEach((profile) => {
    profile.innerHTML = initials;
  });
}

getUser();

// ================== logOut ==================

logouts.forEach((logout) => {
  logout.addEventListener("click", async (event) => {
    event.preventDefault();
    const { error } = await client.auth.signOut();
    if (error) {
      console.log(error);
    }
    window.location.href = "../index.html";
  });
});
