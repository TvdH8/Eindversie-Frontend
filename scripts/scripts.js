// Definieëren van de dropdown button, items en pijltje.
dropdownButton = document.querySelector('.dropdown-button');
dropdownItems = document.querySelector('.dropdown-items');
dropdownPijltje = document.querySelector('.fa-chevron-right')

// Functie voor het togglen van de dropdown en het pijltje.
function toggleDropdown(){

    dropdownItems.classList.toggle('dropdownShow');
    dropdownPijltje.classList.toggle('draaiPijl')
}

dropdownButton.addEventListener('click', toggleDropdown);

// Hamburgermenu button selecteren.
headerMenuKnop = document.querySelector('.headerButton');
headerMenuZelf = document.querySelector('.sideHeader');


function headerMenuToggle(){
    headerMenuZelf.classList.toggle('actiefMenu')
}

// Header menu togglen als je op de button klikt. Toggle van open en dicht.
headerMenuKnop.addEventListener('click', headerMenuToggle);

alleImagesInScrollX = document.querySelector('.carrousel');
fotoPlaceholder = document.querySelector('.placeholder');

// Als je klikt op een foto uit de carousel, dan word die gewisseld met het grote plaatje
function vervangFoto(event){
    fotoPlaceholder.src = event.target.src;
}

alleImagesInScrollX.addEventListener('click', vervangFoto);