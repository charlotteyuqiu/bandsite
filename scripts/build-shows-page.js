// My array for shows
const shows = [
  {
    timestamp: new Date("Mon Sept 09 2024").toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    venue: "Ronald Lane ",
    location: "San Francisco, CA",
  },

  {
    timestamp: new Date("Tue Sept 17 2024  ").toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    venue: "Pier 3 East ",
    location: "San Francisco, CA",
  },

  {
    timestamp: new Date("Sat Oct 12 2024  ").toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    venue: "View Lounge ",
    location: "San Francisco, CA",
  },

  {
    timestamp: new Date("Sat Nov 16 2024").toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    venue: "Hyatt Agency ",
    location: "San Francisco, CA",
  },

  {
    timestamp: new Date("Fri Nov 29 2024").toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    timestamp: new Date("Wed Dec 18 2024 ").toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

// Add shows section by DOM manipulation
// create elements, add class, append elements for section, heading
const section = document.createElement("section");
section.classList.add("show");
const container = document.createElement("div");
container.classList.add("show__container");
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

// iterate and display each show ticket
const displayShows = (show) => {
  const listItem = document.createElement("li");
  listItem.classList.add("show__list-detail"); // Add a class for styling

  // Create date
  const dateTitle = document.createElement("p");
  dateTitle.classList.add("show__sub-header");
  dateTitle.textContent = `DATE`;
  listItem.appendChild(dateTitle);
  const dateInfo = document.createElement("p");
  dateInfo.classList.add("show__date-detail");
  dateInfo.textContent = `${show.timestamp}`;
  listItem.appendChild(dateInfo);

  // Create venue
  const venueTitle = document.createElement("p");
  venueTitle.classList.add("show__sub-header");
  venueTitle.textContent = `VENUE`;
  listItem.appendChild(venueTitle);
  const venueInfo = document.createElement("p");
  venueInfo.classList.add("show__list-each-detail");
  venueInfo.textContent = `${show.venue}`;
  listItem.appendChild(venueInfo);

  // Create location
  const locationTitle = document.createElement("p");
  locationTitle.classList.add("show__sub-header");
  locationTitle.textContent = `LOCATION`;
  listItem.appendChild(locationTitle);
  const locationInfo = document.createElement("p");
  locationInfo.classList.add("show__list-each-detail");
  locationInfo.textContent = `${show.location}`;
  listItem.appendChild(locationInfo);

  // Create the button
  const button = document.createElement("button");
  button.textContent = "BUY TICKETS";
  button.classList.add("buy-tickets-button");
  listItem.appendChild(button);

  list.appendChild(listItem);
};

//layout of Header for desktop,tablet resposnive design
const listItem = document.createElement("li");
listItem.classList.add("show__list-detail");
listItem.classList.add("show--display-nonePhone");
const dateTopTitle = document.createElement("p");
dateTopTitle.classList.add("show__list-each-detail");
dateTopTitle.textContent = `DATE`;
listItem.appendChild(dateTopTitle);
const venueTopTitle = document.createElement("p");
venueTopTitle.classList.add("show__list-each-detail");
venueTopTitle.textContent = `VENUE`;
listItem.appendChild(venueTopTitle);
const locationTopInfo = document.createElement("p");
locationTopInfo.classList.add("show__list-each-detail");
locationTopInfo.textContent = `LOCATION`;
listItem.appendChild(locationTopInfo);
const placeHolder = document.createElement("p");
placeHolder.classList.add("show__list-each-detail");
placeHolder.textContent = ``;
listItem.appendChild(placeHolder);
list.appendChild(listItem);

for (let i = 0; i < shows.length; i++) {
  displayShows(shows[i]);
}

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
