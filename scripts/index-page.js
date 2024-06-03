import BandSiteApi from "./band-site-api.js";

// // Initialize array of comments
// let comments = [
//   {
//     name: "Victor Pinto",
//     timestamp: new Date("2023-11-02").toLocaleString(),
//     comment:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Christina Cabrera",
//     timestamp: new Date("2023-10-28").toLocaleString(),
//     comment:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Isaac Tadesse",
//     timestamp: new Date("2023-10-20").toLocaleString(),
//     comment:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];

//sort
// comments.sort((a, b) => b.timestamp - a.timestamp);

// // set class prototype
// class Comment {
//   constructor(name, timestamp, comment) {
//     this.name = name;
//     this.timestamp = timestamp;
//     this.comment = comment;
//   }
// }

const bandSiteApi = new BandSiteApi();
await bandSiteApi.initializeApiKey();
const comments = await bandSiteApi.getComments();
console.log("API KEY is:" + bandSiteApi.apiKey);
console.log(comments);

//create elements
function createElements(comments) {
  const commentsElem = document.querySelector(".conversation__list");
  commentsElem.innerHTML = "";

  comments.forEach((comment) => {
    const listItem = document.createElement("li");
    listItem.classList.add("conversation__list-item");
    const nameElem = document.createElement("div");
    nameElem.classList.add("conversation__name");
    const timeElem = document.createElement("div");
    timeElem.classList.add("conversation__date");
    const commentElem = document.createElement("p");

    nameElem.innerText = comment.name;
    const formattedDate = new Date(comment.timestamp).toLocaleDateString(
      "en-US",
      {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }
    );

    timeElem.innerText = formattedDate;
    commentElem.innerText = comment.comment;

    const nameTime = document.createElement("div");
    nameTime.classList.add("conversation__name-time");
    nameTime.appendChild(nameElem);
    nameTime.appendChild(timeElem);

    listItem.appendChild(nameTime);
    listItem.appendChild(commentElem);
    commentsElem.prepend(listItem);
  });
}
comments.sort((a, b) => a.timestamp - b.timestamp);
createElements(comments);
//create elements
// function createElements(comments) {
//   const commentsElem = document.querySelector(".conversation__list");
//   const listItem = document.createElement("li");
//   listItem.classList.add("conversation__list-item");
//   const nameSpan = document.createElement("div");
//   nameSpan.classList.add("conversation__name");
//   const timeSpan = document.createElement("div");
//   timeSpan.classList.add("conversation__date");
//   const commentText = document.createElement("p");

//   nameSpan.textContent = comment.name + " ";
//   timeSpan.textContent = ` [${comment.timestamp}] `;
//   commentText.textContent = comment.comment;

//   const nameTime = document.createElement("div");
//   nameTime.classList.add("conversation__name-time");
//   nameTime.appendChild(nameSpan);
//   nameTime.appendChild(timeSpan);

//   listItem.appendChild(nameTime);
//   listItem.appendChild(commentText);
//   commentList.prepend(listItem);
// }

// // Add/render comments
// function renderComments() {
//   for (let i = comments.length - 1; i >= 0; i--) {
//     addComment(comments[i]);
//   }
// }

// submit event
const form = document.querySelector(".conversation__form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const comment = event.target.comment.value;

  if (name !== "" && comment !== "") {
    const newComment = {
      name: name,
      comment: comment,
    };

    await bandSiteApi.postComment(newComment);
    const comments = await bandSiteApi.getComments();
    comments.sort((a, b) => a.timestamp - b.timestamp);
    createElements(comments);
  }
  form.reset();
});
