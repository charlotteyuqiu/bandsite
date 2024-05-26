const commentList = document.querySelector(".conversation__list");
// Initialize array of comments
let comments = [
  {
    name: "Victor Pinto",
    timestamp: new Date("2023-11-02").toLocaleString(),
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    timestamp: new Date("2023-10-28").toLocaleString(),
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    timestamp: new Date("2023-10-20").toLocaleString(),
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// set class prototype
class Comment {
  constructor(name, timestamp, comment) {
    this.name = name;
    this.timestamp = timestamp;
    this.comment = comment;
  }
}

// li structure
function addComment(comment) {
  const listItem = document.createElement("li");
  listItem.classList.add("conversation__list-item");
  const nameSpan = document.createElement("div");
  nameSpan.classList.add("conversation__name");
  const timeSpan = document.createElement("div");
  timeSpan.classList.add("conversation__date");
  const commentText = document.createElement("p");

  nameSpan.textContent = comment.name + " ";
  timeSpan.textContent = ` [${comment.timestamp}] `;
  commentText.textContent = comment.comment;

  const nameTime = document.createElement("div");
  nameTime.classList.add("conversation__name-time");
  nameTime.appendChild(nameSpan);
  nameTime.appendChild(timeSpan);

  listItem.appendChild(nameTime);
  listItem.appendChild(commentText);
  commentList.prepend(listItem);
}

// Add/render comments
function renderComments() {
  for (let i = comments.length - 1; i >= 0; i--) {
    addComment(comments[i]);
  }
}

// submit event
const form = document.querySelector(".conversation__form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const comment = event.target.comment.value;

  if (name !== "" && comment !== "") {
    const timestamp = new Date().toLocaleString();
    const newComment = new Comment(name, timestamp, comment);
    comments.push(newComment);
    addComment(newComment);
  }
  form.reset();
});

renderComments();
