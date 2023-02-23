let navToggle = document.querySelector(".nav-toggle");
let closeToggle = document.querySelector(".close-toggle");
let allContainers = document.querySelector(".container");
let menuContainer = document.querySelector(".navbar-list");
let menuOpen = false;

navToggle.addEventListener("click", () => {
  menuContainer.classList.add("open");

  menuOpen = true;
  return false;
});

closeToggle.addEventListener("click", () => {
  menuContainer.classList.remove("open");
  allContainers.classList.remove("close-containers");
  menuOpen = false;
  return false;
});

var works = [
  {
    title: 'Note Application',
    body: 'Create a RestFul Api with several endpoints where users can perform CRUD operation ( create, read, update and delete )',
    tools: 'Node.js, Express.js MongoDB',
    link: 'https://github.com/fadodr/node_note_api',
  },
  {
    title: 'Basic OAuth',
    body: 'A simple Restful Api where users can perform basic authentication operations and get appropriate responses',
    tools: 'Node.js, GraphQl, Express.js MongoDB',
    link: 'https://github.com/fadodr/NodeAuthgraphql',
  },
  {
    title: 'Cloud Resume Challenge',
    body: 'Create a website with HTML and CSS and deploy it to the cloud using several Amazon web services to make it more secure, count the number of users that visit the website and reduce latency while accessing it.',
    tools: 'AWS SAM CLI, Routes53, DynamoDB',
    link: ' https://github.com/fadodr/cloud_resume',
  },
];
  //["Note Application", "Basic OAuth", "Cloud Resume Challenge"];

for (var i = 0; i < works.length; i++) {
  let leftWork = document.createElement("div");
  leftWork.classList.add("left-work");
  leftWork.innerHTML = `<h1>${i + 1}.</h1>`;

  let rightWork = document.createElement("div");
  rightWork.classList.add("right-work");
  rightWork.innerHTML = `<h3>${works[i].title}</h3>
                        <p>${works[i].body}</p>
                        <br>
                        <button class="viewbtn"><a href= ${works[i].link}>View</a></button>`;

  let workContent = document.createElement("div");
  workContent.classList.add("work-content");
  workContent.appendChild(leftWork);
  workContent.appendChild(rightWork);

  let containerDiv = document.querySelector(".work-content-other-screens");
  containerDiv.appendChild(workContent);
}

for (var i = 0; i < works.length; i++) {
  let workMobileContainer = document.createElement("div");
  workMobileContainer.classList.add("work-content-mobile-container");
  workMobileContainer.innerHTML = `<h3>${works[i].title}</h3>
                                  <p>${works[i].body}</p>`;

  let toolsParagraph = document.createElement("p");
  toolsParagraph.classList.add("tools");
  toolsParagraph.innerText = `Tools: ${works[i].tools}`;

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("work-images");
  imageContainer.innerHTML = `<a href= ${works[i].link}><img src="images/logo-github.png" alt=""></a>
                                <img src="images/link.png" alt="">`;

  workMobileContainer.appendChild(toolsParagraph);
  workMobileContainer.appendChild(imageContainer);

  let containerDiv = document.querySelector(".work-content-mobile");
  containerDiv.appendChild(workMobileContainer);
}

var navItems = document.getElementById("nav-list");
var links = navItems.getElementsByClassName("nav");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    var current = navItems.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    menuContainer.classList.remove("open");
    allContainers.classList.remove("close-containers");
    menuOpen = false;
    if (this.innerText.toLowerCase() !== "contact") {
      document
        .getElementById(`${this.innerText.toLowerCase()}-cont`)
        .scrollIntoView({ behavior: "smooth" });
    }
  });
}

//increment and fetch number of visitors to my webiste
fetch('https://jz4hz3oecj.execute-api.us-east-1.amazonaws.com/Prod/post')
  .then(() => fetch('https://jz4hz3oecj.execute-api.us-east-1.amazonaws.com/Prod/get')
  .then(response => response.json())
  .then((data) => document.getElementById('visitor-text').innerText = data.count.Item.visitor));

let homeContainer = document.getElementById("home-cont");
let aboutContainer = document.getElementById("about-cont");
let workContainer = document.getElementById("work-cont");

window.addEventListener("scroll", e => {
  var top = window.pageYOffset;
  if (top === 0) {
    return;
  }
  if (top >= homeContainer.offsetTop && top < aboutContainer.offsetTop) {
    var current = navItems.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    for (var j = 0; j < links.length; j++) {
      if ("Home" === links[j].innerHTML) {
        links[j].classList.add("active");
      }
    }
  }
  if (top >= aboutContainer.offsetTop && top < workContainer.offsetTop) {
    var current = navItems.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    for (var j = 0; j < links.length; j++) {
      if ("About" === links[j].innerHTML) {
        links[j].classList.add("active");
      }
    }
  }
  if (top >= workContainer.offsetTop && top !== 0) {
    var current = navItems.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    for (var j = 0; j < links.length; j++) {
      if ("Work" === links[j].innerHTML) {
        links[j].classList.add("active");
      }
    }
  }
});
