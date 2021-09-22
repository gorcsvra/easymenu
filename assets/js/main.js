"use strict";

const menuContainer = document.querySelector("nav ul");

const menuItems = [
  {
    title: "Home",
    url: "index.html",
  },
  {
    title: "About",
    url: "about.html",
  },
  {
    title: "Contact",
    url: "contact.html",
  },
];

const menuItems2 = [
  {
    title: "Admin",
    url: "admin.html",
  },
  {
    title: "About",
    url: "about.html",
  },
  {
    title: "Products",
    url: "products.html",
  },
];

/*function menuBuilder(array) {
  for (let i = 0; i < menuItems.length; i++) {
    let listItem = document.createElement("li");
    let linkItem = document.createElement("a");
    linkItem.setAttribute("href", menuItems[i].url);
    linkItem.textContent = menuItems[i].title;
    listItem.appendChild(linkItem);
    menuContainer.appendChild(listItem);
  }
}*/

function menuBuilder(array) {
  for (let i = 0; i < array.length; i++) {
    let listItem = document.createElement("li");
    let linkItem = document.createElement("a");
    linkItem.setAttribute("href", array[i].url);
    linkItem.textContent = array[i].title;
    listItem.appendChild(linkItem);
    menuContainer.appendChild(listItem);
  }
}

const menuBuilder2 = (array = []) => {
  array.forEach ((item) => {
     let listItem = document.createElement("li");
  let linkItem = document.createElement("a");
  linkItem.setAttribute("href", item.url);
  linkItem.textContent = item.title;
  listItem.appendChild(linkItem);
  menuContainer.appendChild(listItem);
});
}

menuBuilder(menuItems);
menuBuilder2(menuItems2);