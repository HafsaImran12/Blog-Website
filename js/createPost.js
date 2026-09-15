let blogPost = document.querySelector("#blogPost");

blogPost.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const postData = new FormData(blogPost);
    let data = Object.fromEntries(postData);
    let { title, category, content } = data;
    console.log(data);
    console.log(title);
    console.log(category);
    console.log(content);

    const {
      data: { user },
    } = await client.auth.getUser();
    let id = user?.id

    const { data: blogData, error } = await client
      .from("post_table")
          .insert({ user_id: id, title, content, category });
      
      if (postData) {
          console.log(postData);
          
      } else {
          console.log(error.message);
          
      }
      
  } catch (error) {
    console.log(error);
  }
});
