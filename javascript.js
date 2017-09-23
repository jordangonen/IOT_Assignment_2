//users
var sessionUser;

var user1 = {
        door: {
                state:0,  // 0 for down, 1 for coming down, 2 for going up, 3 for up
                temp: 72,
                hum: 34,
                motion: true, // boolean

        },
        email:"rocketman@up.nk",
        password:"bestkorea",
        phone:"5555555555",
        id:1234563
}
var user2 = {
        door: {
                state:3,  // 0 for down, 1 for coming down, 2 for going up, 3 for up
                temp: 72,
                hum: 34,
                motion: true, // boolean

        },
        email:"dotard@down.us",
        password:"maga",
        phone:"5555555566",
        id:9876123
}
//array of user account objects
var users = [user1, user2];





// Display Element

function displayElement(hide, show) {
  document.getElementById(hide).style.display = 'none';
  document.getElementById(show).style.display = 'block';
}

// login button
document.getElementById("login-btn").addEventListener("click", function() {

        var email = document.getElementById('email').value;

        if (email == user1.email) {
                displayElement("login-page","main-page");
                console.log("USER 1 LOGIN"); //replace with call to display function
                sessionUser = user1;

        }
        if (email == user2.email) {
                displayElement("login-page","main-page");
                console.log("USER 2 LOGIN");//replace with call to display function
                sessionUser = user2;
        }
        if(email != user1.email && email != user2.email) {
                alert("Wrong Login Details. Try Again.");
                console.log("WRONG LOGIN INFO");//replace with print to page of inncorrect password or email
        }

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
