// Dato un array di oggetti letterali con:
//  - url dell'immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande
//  in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso destra,
//  l'immagine che deve attivarsi sarà l'ultima e viceversa per l'ultima immagine se l'utente clicca la freccia verso sinistra.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

    const newImagesArray = images.map(item => item.image);
    const newTitleArray = images.map(item => item.title);
    const newTextArray = images.map(item => item.text);

    console.log(newImagesArray);
    console.log(newImagesArray.length);

    console.log(newTitleArray);
    console.log(newTextArray);


const carouselElement = document.querySelector(".slides")

const thumbnailsElement = document.querySelector(".thumbnails")



for (let index=0; index < newImagesArray.length; index++) {
    console.log(newImagesArray[index]);

    carouselElement.innerHTML += `<div class="slide">
    <p class="info">"${newTextArray[index]}"</p>
    <img src="${newImagesArray[index]}" alt="${newTitleArray[index]}">
    </div>`;

    thumbnailsElement.innerHTML += `<div class="thumb">
    <img src="${newImagesArray[index]}" alt="${newTitleArray[index]}">
    </div>`;

}


const allSlides = document.querySelectorAll(".slide");

allSlides[0].classList.add("current")

const previousArrow = document.querySelector(".previous")
const nextArrow = document.querySelector(".next")

let currentSlide = 0;

nextArrow.addEventListener ("click",

function() {

    console.log("ho cliccato next");
    allSlides[currentSlide].classList.remove("current");

    if (currentSlide == allSlides.length -1) {
        currentSlide = 0;
    }
    else {
        currentSlide = currentSlide + 1;
    }

    allSlides[currentSlide].classList.add("current");
}
);

previousArrow.addEventListener ("click",

function() {

    console.log("ho cliccato previous");
    allSlides[currentSlide].classList.remove("current");

    currentSlide = currentSlide - 1;
    allSlides[currentSlide].classList.add("current");

})
