// Thursday, Dec 15, 2022
// Day 22
// React 5.1 -- Homework
// DOM Menu Lab 1
// J.T.W.

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

////////////
// TASKS //
///////////

// Task 1.0
// Select and cache the <main> element in a variable named mainEl
let mainEl = document.querySelector("main");

// Task 1.1
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Task 1.3
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// Task 2.0
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById("top-menu");

// Task 2.1
// Set the height topMenuEl to be 100%.
topMenuEl.style.height = "100%";

// Task 2.2
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Task 3.0
// Copy the following data structure to the top of script.js

// Task 3.1
/*  
    Iterate over the entire menuLinks array and for each "link" object:
    1. Create an <a> element.
    2. On the new element, add an href attribute with its value set to the href property of the "link" object.  3. Set the new element's content to the value of the text property of the "link" object.
    4. Append the new element to the topMenuEl element.
*/

function iterateMenuLink(array, menuElement) {
  array.forEach((element) => {
    // create an <a> element
    const newElement = document.createElement("a");

    // add href attribute
    newElement.setAttribute("href", element.href);

    // set element content
    newElement.innerHTML = element.text;

    // append new element
    menuElement.append(newElement);
  });
}

iterateMenuLink(menuLinks, topMenuEl);
