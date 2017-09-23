// Dispay Element

function displayElement(hide, show) {
  document.getElementById(hide).hidden = true;
  document.getElementById(show).hidden = false;
}

document.getElementById("login-btn").addEventListener("click", function() {
    displayElement(login-page,main-page);

};
