const userProfile = document.querySelectorAll(".userProfile");
const userEmail = document.querySelectorAll(".userEmail");
const logouts = document.querySelectorAll(".logout");
const userName = document.querySelectorAll(".userName");

async function getUser() {

  // ================== getUser ==================

  // ----- GET EMAIL -----
  const {
    data: { user },
  } = await client.auth.getUser();

  userEmail.forEach((email) => {
    email.innerHTML = user.email;
  });
  // ================== selectUser ==================

  const { data, error } = await client
    .from("user_data")
    .select("name")
    .eq("user_id", user.id);


  // ----- GET NAME -----
  let name = data[0].name;

  userName.forEach((element) => {
    element.innerHTML = name;
  });

  // ----- GET NAME INITIAL -----

  let initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

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
