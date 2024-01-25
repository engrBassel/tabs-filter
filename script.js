let tabs = document.querySelectorAll(".tabs li"),
  items = document.querySelectorAll(".items i");

tabs.forEach((tab) => {
  tab.addEventListener("click", removeActive);
  tab.addEventListener("click", manageItems);
});

function removeActive() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
    this.classList.add("active");
  });
}

function manageItems() {
  items.forEach((item) => {
    item.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((item) => {
    item.style.display = "flex";
  });
}
