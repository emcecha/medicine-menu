var navElements = document.querySelectorAll("li");
var reaction = document.querySelector(".glass__reaction");
var flameBox = document.querySelector(".glass__flame");
var drugs = document.querySelectorAll(".nav__list--side li")
var bubles;
var bublesCounter = 0;
var flame;
var flameCounter = 0;

function showList(event) {

    var ul = this.querySelector("ul");

    if (ul) {
        ul.classList.add("visible");
    }

}

function hideList(event) {

    var ul = this.querySelector("ul");

    if (ul) {

        if (ul.className.indexOf("visible") > -1) {
            ul.classList.remove("visible");
        }

    }

}

function changeBubles() {

    if (bublesCounter === 4) {
        bublesCounter = 0;
    }

    reaction.src = "images/bub" + bublesCounter + ".png";
    bublesCounter++;
}

function bublesAnimation() {

    bubles = setInterval(changeBubles, 250);
}

function stopBublesAnimation() {

    clearInterval(bubles);
}

function changeFlame() {

    if (flameCounter === 4) {
        flameCounter = 0;
    }

    flameBox.src = "images/flame" + flameCounter + ".png";
    flameCounter++;
}

function flameAnimation() {

    flame = setInterval(changeFlame, 250);
}

function showDrugStructure(event) {

    stopBublesAnimation();
    var drug = this.innerHTML;
    reaction.src = "images/" + drug + ".png";
}

bublesAnimation();
flameAnimation();

for (var i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener("mouseover", showList);
    navElements[i].addEventListener("mouseout", hideList);
}

for (var i = 0; i < drugs.length; i++) {
    drugs[i].addEventListener("mouseover", showDrugStructure);
    drugs[i].addEventListener("mouseout", bublesAnimation);
}
