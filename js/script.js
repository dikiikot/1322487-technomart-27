var link = document.querySelector(".right-container");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    console.log("Заполните все поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
//карта
var link = document.querySelector(".contacts-map");
var mapLink = document.querySelector(".contacts-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

var linkB = document.querySelectorAll(".test777");
var popupB= document.querySelector(".modal-bucket");
var closeB = popupB.querySelector(".modal-close");


linkB.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupB.classList.add("modal-show");
});
closeB.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupB.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupB.classList.contains("modal-show")) {
      popupB.classList.remove("modal-show");
    }
  }
});
