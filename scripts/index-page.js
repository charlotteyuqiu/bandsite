const conversationList = document.querySelector(".conversation__form");

form.addEventListener("comment", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const comment = event.target.comment.value;

  if (name !== "" && comment !== "") {
    const newComment = new Comment(name, comment);
    console.log(newComment);
  }
  form.reset();
});
