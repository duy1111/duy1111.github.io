let search = document.getElementById("mySearch");
let facebook = document.getElementById("logo-fb");
search.addEventListener("focusin", (e) => {
    facebook.style.display = "none";
});