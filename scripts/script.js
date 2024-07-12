///////////////// Part 1: Getting Started

//1.0-1.3
//step 1
const mainEl = document.querySelector("main");
console.log(mainEl);
//step 2
mainEl.style.backgroundColor = "var(--main-bg)";
//let backGroundColor = 'var(--main-bg)'
//step 3
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//step 4
mainEl.classList = "flex-ctr";

////////////////// Part 2: Creating a Menu Bar
//step 1
const topmenuEl = document.getElementById("top-menu");
console.log(topmenuEl);
// step 2
topmenuEl.style.height = "100%";
// step 3
topmenuEl.style.backgroundColor = "var(--top-menu-bg)";
//step 4
topmenuEl.classList = "flex-around";

//////////////  Adding Menu Buttons
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// 1 - Iterate over the entire menuLinks array and for each "link" object:
// 2 - Create an <a> element.
// 3 - On the new element, add an href attribute with its value set to the href property of the "link" object.
// 4 - Set the new element's content to the value of the text property of the "link" object.
// 5 - Append the new element to the topMenuEl element.
menuLinks.forEach(function (link) {
  let linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.textContent = link.text;
  topmenuEl.appendChild(linkEl);
});

///////////////// Part 3: Creating the Submenu

const subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList = "flex-around";
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//////////////// Part 4: Adding Menu Interaction
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

/// 1- Select and cache the all of the <a> elements inside of topMenuEl in a variable
// named topMenuLinks.

var topMenuEl = document.getElementById("top-menu");
var topMenuLinks = topMenuEl.getElementsByTagName("a");

///// 2-  Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click");
