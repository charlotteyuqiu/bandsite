import BandSiteApi from "./band-site-api.js";
// API Set UP
const bandSiteApi = new BandSiteApi();
await bandSiteApi.initializeApiKey();
const shows = await bandSiteApi.getShows();
console.log("API KEY is:" + bandSiteApi.apiKey);
console.log(shows);

// create elements
function createElements(shows) {
  // create elements, add class, append elements for section, heading
  const section = document.createElement("section");
  section.classList.add("show");
  const container = document.createElement("div");
  container.classList.add("show__container");
  container.innerHTML = "";
  const heading = document.createElement("h2");
  heading.textContent = "Shows";
  heading.classList.add("show__heading");

  //create elements, add class, append elements for ticket details
  const displayDiv = document.createElement("div");
  displayDiv.classList.add("show--display");
  const list = document.createElement("ul");
  list.classList.add("show__list");

  // append elements
  displayDiv.appendChild(list);
  container.appendChild(heading);
  container.appendChild(displayDiv);
  section.appendChild(container);

  const footer = document.querySelector("footer");
  const parentOfFooter = footer.parentNode;
  parentOfFooter.insertBefore(section, footer);

  //layout of Header for desktop,tablet resposnive design
  const listItem = document.createElement("li");
  listItem.classList.add("show__list-detail");
  listItem.classList.add("show--display-nonePhone");
  const dateTopTitle = document.createElement("p");
  dateTopTitle.textContent = `DATE`;
  listItem.appendChild(dateTopTitle);
  const venueTopTitle = document.createElement("p");
  venueTopTitle.textContent = `VENUE`;
  listItem.appendChild(venueTopTitle);
  const locationTopInfo = document.createElement("p");
  locationTopInfo.textContent = `LOCATION`;
  listItem.appendChild(locationTopInfo);
  const placeHolder = document.createElement("p");
  placeHolder.textContent = ``;
  listItem.appendChild(placeHolder);
  list.appendChild(listItem);
  // iterate and display each show ticket
  shows.forEach((show) => {
    const listItem = document.createElement("li");
    listItem.classList.add("show__list-detail"); // Add a class for styling

    // Create date
    const dateTitle = document.createElement("p");
    dateTitle.classList.add("show__sub-header");
    dateTitle.textContent = `DATE`;
    listItem.appendChild(dateTitle);
    const dateInfo = document.createElement("p");
    dateInfo.classList.add("show__date-detail");
    // Retrieve date from api result by show.date
    dateInfo.textContent = new Date(show.date).toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    listItem.appendChild(dateInfo);

    // Create venue
    const venueTitle = document.createElement("p");
    venueTitle.classList.add("show__sub-header");
    venueTitle.textContent = `VENUE`;
    listItem.appendChild(venueTitle);
    const venueInfo = document.createElement("p");
    venueInfo.classList.add("show__list-each-detail");
    // Retrieve venue from api result by show.place
    venueInfo.textContent = show.place;
    listItem.appendChild(venueInfo);

    // Create location
    const locationTitle = document.createElement("p");
    locationTitle.classList.add("show__sub-header");
    locationTitle.textContent = `LOCATION`;
    listItem.appendChild(locationTitle);
    const locationInfo = document.createElement("p");
    locationInfo.classList.add("show__list-each-detail");
    // Retrieve location from api result by show.location
    locationInfo.textContent = show.location;
    listItem.appendChild(locationInfo);

    // Create the button
    const button = document.createElement("button");
    button.textContent = "BUY TICKETS";
    button.classList.add("buy-tickets-button");
    listItem.appendChild(button);

    list.appendChild(listItem);
  });
}

createElements(shows);

// Color change while clikcing on shows
const divs = document.querySelectorAll(".show__list-detail");
divs.forEach(function (div) {
  div.addEventListener("click", function () {
    //reset back to default first
    divs.forEach(function (d) {
      d.classList.remove("active");
    });
    this.classList.add("active");
  });
});
