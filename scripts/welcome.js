const inputArea = document.querySelector("input");

inputArea.addEventListener("change", function() {

if (!inputArea.checked){
    setTimeout(function () {
        window.location.href = "https://2023.webdev-cf2m.be/Lee/Site/";
    }, 2001);
}
});