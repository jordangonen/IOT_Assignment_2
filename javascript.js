// Display Element

function displayElement(hide, show) {
  document.getElementById(hide).style.display = 'none';
  document.getElementById(show).style.display = 'block';
}

// login button
document.getElementById("login-btn").addEventListener("click", function() {
    displayElement("login-page","main-page");
});
// forgot-password-button
document.getElementById("forgot-pwd-btn").addEventListener("click", function() {
    displayElement("login-page","request-page");
});
// forgot-password-button
document.getElementById("forgot-pwd-btn").addEventListener("click", function() {
    displayElement("login-page","request-page");
});
document.getElementById("create-account-btn").addEventListener("click", function() {
    displayElement("login-page","create-page");
});
document.getElementById("complete-creation-btn").addEventListener("click", function() {
    displayElement("create-page","main-page");
});
document.getElementById("request-pwd-btn").addEventListener("click", function() {
    displayElement("request-page","reset-page");
});
document.getElementById("reset-btn").addEventListener("click", function() {
    displayElement("reset-page","main-page");
});
document.getElementById("settings-btn").addEventListener("click", function() {
    displayElement("main-page","edit-page");
});
document.getElementById("save-btn").addEventListener("click", function() {
    displayElement("edit-page","main-page");
});
