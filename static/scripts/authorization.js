"use strict";
import { addSoundOnHover } from './general_scritps.js';

window.onload = function () {
    addSoundOnHover('button_log_in_enter', 'on_enter_button.mp3');
    addSoundOnHover('button_sign_up', 'on_enter_button.mp3');
    loginButton.addEventListener("click", validateInputs);
}

const loginButton = document.getElementById("button_log_in_enter");

function validateInputs(event) {
    const emailInput = document.getElementById("input_email");
    const passInput = document.getElementById("input_pass");
    const email = emailInput.value.trim();
    const password = passInput.value.trim();
    if (email === "" || password === "") {
        event.preventDefault();
        if (email === "") {
            emailInput.focus();
        } else {
            passInput.focus();
        }
        return false; 
    }
    event.stopPropagation()
    return true;
}