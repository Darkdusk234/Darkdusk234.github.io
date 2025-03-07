document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("ghost");
    const container = document.getElementById("quotesection");

    button.addEventListener("click", function() {
        container.style.backgroundImage = "url(../IMG/AltQuotePic.png)";
    })
})