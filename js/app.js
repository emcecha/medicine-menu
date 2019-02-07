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


// var drugs = [
//     {
//         name: "analgesic",
//         items: [
//             {
//                 name: "cox-2 inhibitors",
//                 items: [
//                     {
//                         name: "ibuprofen",
//                         structure: ""
//                     },
//                     {
//                         name: "ketoprofen",
//                         structure: ""
//                     },
//                     {
//                         name: "piroxicam",
//                         structure: ""
//                     }
//                 ]
//             },
//             {
//                 name: "opioids",
//                 items: [
//                     {
//                         name: "fentanyl",
//                         structure: ""
//                     },
//                     {
//                         name: "morphine",
//                         structure: ""
//                     },
//                     {
//                         name: "oxycodone",
//                         structure: ""
//                     },
//                     {
//                         name: "tramadol",
//                         structure: ""
//                     }
//                 ]
//             },
//             {
//                 name: "others",
//                 items: [
//                     {
//                         name: "paracetamol",
//                         structure: ""
//                     },
//                     {
//                         name: "metamizole",
//                         structure: ""
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: "sedatives",
//         items: [
//             {
//                 name: "barbiturates",
//                 items: [
//                     {
//                         name: "barbital",
//                         structure: ""
//                     },
//                     {
//                         name: "phenobarbital",
//                         structure: ""
//                     }
//                 ]
//             },
//             {
//                 name: "benzodiazepines",
//                 items: [
//                     {
//                         name: "clonazepam",
//                         structure: ""
//                     },
//                     {
//                         name: "diazepam",
//                         structure: ""
//                     },
//                     {
//                         name: "lorazepam",
//                         structure: ""
//                     }
//                 ]
//             },
//             {
//                 name: "others",
//                 items: [
//                     {
//                         name: "ethinamate",
//                         structure: ""
//                     },
//                     {
//                         name: "methaqualone",
//                         structure: ""
//                     }
//                 ]
//             }
//         ]
//     }
// ];
//
// var nav = document.querySelector(".nav");
// var listCounter = 0;
//
// function createList(event) {
//
//
//     var list = document.createElement("ul");
//     list.classList.add("nav__list");
//     var target;
//
//     if (listCounter === 0) {
//
//         nav.appendChild(list);
//
//         createListItems(drugs,target,list);
//
//         return listCounter = 1;
//     };
//
//     if (listCounter === 1) {
//
//         list.classList.add("nav__list--bottom");
//         address1 = this.dataset.address1;
//         target = this;
//
//         this.appendChild(list);
//
//         createListItems(drugs[address1].items,target,list);
//
//         return listCounter = 2;
//     };
//
//     if (listCounter === 2) {
//
//         list.classList.add("nav__list--side")
//         address1 = this.dataset.address1;
//         address2 = this.dataset.address2;
//         target = this;
//
//         this.appendChild(list);
//
//         createListItems(drugs[address1].items[address2].items,target,list);
//         console.log(drugs[address1].items);
//         console.log(drugs[address1].items[address2].items);
//
//         return listCounter = 3;
//     };
// }
//
// function createListItems(arr,target,list) {
//
//     for (var i = 0; i < arr.length; i++) {
//
//         var listItem = document.createElement("li");
//         listItem.classList.add("nav__item");
//         listItem.innerText = arr[i].name
//         list.appendChild(listItem);
//
//         if (listCounter === 0) {
//
//             listItem.dataset.address1 = arr.indexOf(arr[i]);
//             listItem.addEventListener("mouseover", createList);
//             listItem.addEventListener("mouseout", delateList);
//
//         }
//
//         if (listCounter === 1) {
//
//             listItem.dataset.address1 = target.dataset.address1;
//             listItem.dataset.address2 = arr.indexOf(arr[i]);
//             listItem.classList.add("nav__item--sub");
//             listItem.addEventListener("mouseover", createList);
//             listItem.addEventListener("mouseout", delateList);
//
//         }
//
//         if (listCounter === 2) {
//
//             if (i === 0) {
//
//                 listItem.classList.add("nav__item--first");
//
//             } else {
//
//                 listItem.classList.add("nav__item--sub");
//
//             }
//
//
//         }
//     }
//
// }
//
// function delateList(event) {
//
//     this.removeChild(this.firstElementChild);
//     return listCounter--;
// }
//
// createList();

// listCounter = 1;
