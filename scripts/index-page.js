import BandSiteApi from "./band-site-api.js";

// API Set UP
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

    // Retrieve name, date, comment from api result
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

    // append result into element
    nameTime.appendChild(nameElem);
    nameTime.appendChild(timeElem);

    listItem.appendChild(nameTime);
    listItem.appendChild(commentElem);
    commentsElem.prepend(listItem);
  });
}
comments.sort((a, b) => a.timestamp - b.timestamp);
createElements(comments);

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
