const theButton = document.querySelector("#button-like");

theButton.addEventListener("click", function () {
  console.log("Vous avez cliqué sur le bouton !");
  theButton.classList.toggle("clicked");
});
