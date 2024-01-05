// js to access ul li of skills
// and add class to it

// get ul
const ul = document.querySelector(".skills_list");
// get li
const li = document.querySelectorAll(".skills_list li");

// get content divs
const frontendDiv = document.querySelector(".frontend");
const backendDiv = document.querySelector(".backend");
const databaseDiv = document.querySelector(".database");
const devopsDiv = document.querySelector(".devops");

// add onclick listener on li and remove active class from other except selected
li.forEach((liItem) => {
  liItem.addEventListener("click", () => {
    // Remove "active" class from all li elements
    li.forEach((item) => {
      item.classList.remove("active");
    });

    // Add "active" class to the clicked li
    liItem.classList.add("active");

    // Hide all content divs
    frontendDiv.style.display = "none";
    backendDiv.style.display = "none";
    databaseDiv.style.display = "none";
    devopsDiv.style.display = "none";

    // Show the content div based on the clicked li
    if (liItem.textContent === "FRONTEND") {
      frontendDiv.style.display = "grid";
    } else if (liItem.textContent === "BACKEND") {
      backendDiv.style.display = "grid";
    } else if (liItem.textContent === "DATABASE") {
      databaseDiv.style.display = "grid";
    } else {
      devopsDiv.style.display = "grid";
    }
  });
});
