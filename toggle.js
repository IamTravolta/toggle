var toggleNav = document.getElementById("toggle-me")
var toggleHome = document.getElementById("tg-home")
var toggleRed = document.getElementById("tg-red")
var toggleYellow = document.getElementById("tg-yellow")
var toggleBlue = document.getElementById("tg-blue")
var togglePurple = document.getElementById("tg-purple")
var toggleGreen = document.getElementById("tg-green")
var toggleBody = document.getElementById("tg-body")
var menuNav = document.getElementById("menu-nav")
var docName = document.getElementById("doc-name")


window.onload = function(){
    menuNav.classList.toggle('hideme');
    menuNav.classList.add('transme')
};

toggleNav.addEventListener('mouseenter', function(){ 
    menuNav.classList.toggle('hideme');
    toggleBody.style.display = "grid"
    menuNav.classList.add('transme')

});

toggleNav.addEventListener('mouseenter', function(){ 

    if ( menuNav.style.display = "none") {
        menuNav.style.display = "grid";
        } else {
        menuNav.style.display = "none";
        }

});



/* keyboard functions */

document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === "1") {
        menuNav.classList.toggle('hideme');
        menuNav.classList.add('transme')
        docName.textContent = "toggle menu "
    } 

    if (e.key.toLowerCase() === "2") {
        toggleBody.style.background = "bisque"
        menuNav.classList.add('hideme');
        docName.textContent = "Bisque color selected"
    }

    if (e.key.toLowerCase() === "3") {
        toggleBody.style.background = "red"
        menuNav.classList.add('hideme');
        docName.textContent = "Red color selected"
    }


    if (e.key.toLowerCase() === "4") {
        toggleBody.style.background = "yellow"
        menuNav.classList.add('hideme');
        docName.textContent = "Yellow color selected"
    }

    if (e.key.toLowerCase() === "5") {
        toggleBody.style.background = "blue"
        menuNav.classList.add('hideme');
        docName.textContent = "Blue color selected"
    }

    if (e.key.toLowerCase() === "6") {
        toggleBody.style.background = "purple"
        menuNav.classList.add('hideme');
        docName.textContent = "Purple color selected"
    }

    if (e.key.toLowerCase() === "7") {
        toggleBody.style.background = "green"
        menuNav.classList.add('hideme');
        docName.textContent = "Green color selected"
    }
    
});



/* Color button functions */

toggleHome.addEventListener('click', function(){ 
    toggleBody.style.background = "bisque"
    menuNav.classList.toggle('hideme');
    docName.textContent = "bisque color selected"

});

toggleRed.addEventListener('click', function(){ 
    toggleBody.style.background = "red"
    menuNav.classList.toggle('hideme');
    docName.textContent = "red color selected"
});

toggleYellow.addEventListener('click', function(){ 
    toggleBody.style.background = "yellow"
    menuNav.classList.toggle('hideme');
    docName.textContent = "yellow color selected"
});


toggleBlue.addEventListener('click', function(){ 
    toggleBody.style.background = "blue"
    menuNav.classList.toggle('hideme');
    docName.textContent = "blue color selected"
});


togglePurple.addEventListener('click', function(){ 
    toggleBody.style.background = "purple"
    menuNav.classList.toggle('hideme');
    docName.textContent = "purple color selected"
});

toggleGreen.addEventListener('click', function(){ 
    toggleBody.style.background = "green"
    menuNav.classList.toggle('hideme');
    docName.textContent = "green color selected"
});