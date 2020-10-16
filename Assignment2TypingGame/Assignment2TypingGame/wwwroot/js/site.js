// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var authMode = 0; // 0 --> Sign Up && 1 --> Sign In

function switchToSignup() {
    var passwordField = document.getElementById("passwordField");
    var confirmPasswordField = document.getElementById("confirmPasswordField");
    var authModeButton = document.getElementById("authModeButton");

    confirmPasswordField.classList.remove("collapse");

    authModeButton.value = "Sign In";
}

function switchToSignIn() {
    var passwordField = document.getElementById("passwordField");
    var confirmPasswordField = document.getElementById("confirmPasswordField");
    var authModeButton = document.getElementById("authModeButton");

    confirmPasswordField.classList.add("collapse");

    authModeButton.value = "Sign Up";
}

function setupAuth() {
    var title = document.getElementById("authModeTitle");
    var authModeButton = document.getElementById("authModeButton");

    console.log(authModeButton);

    authModeButton.innerHTML = "Sign In";

    if (authMode == 0) {
        authModeButton.onclick = function () {
            switchToSignIn();
            authMode = 1;
        }
    } else if (authMode == 1) {
        authModeButton.onclick = function () {
            switchToSignup();
            authMode = 0;
        }
    }
}