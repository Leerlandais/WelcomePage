const hiddenBox = document.getElementById("hiddenBox");
const inputArea = document.querySelector("input");
const myButton = document.getElementById("myButton");

myButton.addEventListener('click', myFunction);


function myFunction () {
    inputArea.checked = false;
    myButton.style.display = "none";
    setTimeout(function () {
        window.location.href = "https://2023.webdev-cf2m.be/Lee/Site/";
    }, 2001);
}