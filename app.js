// load spinner

const preloader = document.querySelector(".preloaderWrapper");

window.addEventListener("load", function () {
    preloader.classList.add("fadeOut");
});


// Show/hide videoplayer
var bsCollapse = new bootstrap.Collapse(myCollapse, {
    toggle: false,
    show: true,
    hide: false
})

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filterContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activeMy");
        current[0].className = current[0].className.replace(" activeMy", "");
        this.className += " activeMy";
    });
}

function videoShowreel() {
    const videoPlayer = document.querySelector('#videoPlayer');
    videoPlayer.classList.add('videoPlayerShow');
    document.getElementById('myFrame').src = 'https://player.vimeo.com/video/567017878?h=d59e1cf86c';
}

function videoSupper() {
    const videoPlayer = document.querySelector('#videoPlayer');
    videoPlayer.classList.add('videoPlayerShow');
    document.getElementById('myFrame').src = 'https://player.vimeo.com/video/560863741?h=63cf40471d';
    document.getElementById('videoPlayer').scrollIntoView();
}

// Show videoplayer

function hideCollapse() {
    bsCollapse.hide()
}

// Hide videoplayer
function showCollapse() {
    bsCollapse.show()
}

function videoWords() {
    const videoPlayer = document.querySelector('#videoPlayer');
    videoPlayer.classList.add('videoPlayerShow')
    document.getElementById('myFrame').src = 'https://player.vimeo.com/video/560866488?h=12b0ea2e9a';
    document.getElementById('videoPlayer').scrollIntoView()
}

function videoForks() {

    const videoPlayer = document.querySelector('#videoPlayer');
    videoPlayer.classList.add('videoPlayerShow')
    document.getElementById('myFrame').src = 'https://player.vimeo.com/video/560860674?h=31edbedb59';
    document.getElementById('videoPlayer').scrollIntoView()
}

function videoAlim() {

    const videoPlayer = document.querySelector('#videoPlayer');
    videoPlayer.classList.add('videoPlayerShow')
    document.getElementById('myFrame').src = 'https://player.vimeo.com/video/568522345?h=bbf1a55564';
    document.getElementById('videoPlayer').scrollIntoView()
}

function videoTrain() {

    const videoPlayer = document.querySelector('#videoPlayer');
    videoPlayer.classList.add('videoPlayerShow')
    document.getElementById('myFrame').src = 'https://player.vimeo.com/video/566996606?h=83061a902d';
    document.getElementById('videoPlayer').scrollIntoView()
}

function videoBrios() {

    const videoPlayer = document.querySelector('#videoPlayer');
    videoPlayer.classList.add('videoPlayerShow')
    document.getElementById('myFrame').src = 'https://player.vimeo.com/video/560859524?h=cb3f492779';
    document.getElementById('videoPlayer').scrollIntoView()
}

function videoTheBanc() {

    const videoPlayer = document.querySelector('#videoPlayer');
    videoPlayer.classList.add('videoPlayerShow')
    document.getElementById('myFrame').src = 'https://player.vimeo.com/video/560886825?h=5a656afe94';
    document.getElementById('videoPlayer').scrollIntoView()
}

function videoPride() {

    const videoPlayer = document.querySelector('#videoPlayer');
    videoPlayer.classList.add('videoPlayerShow')
    document.getElementById('myFrame').src = 'https://player.vimeo.com/video/564151962?h=7184e5906e';
    document.getElementById('videoPlayer').scrollIntoView()
}

function videoMrMrs() {

    const videoPlayer = document.querySelector('#videoPlayer');
    videoPlayer.classList.add('videoPlayerShow')
    document.getElementById('myFrame').src = 'https://player.vimeo.com/video/376793654?h=1ad572b7c4';
    document.getElementById('videoPlayer').scrollIntoView()
}

function hidePlayer() {

    const videoPlayer = document.querySelector('#videoPlayer');
    videoPlayer.classList.remove('videoPlayerShow');
}

// When scrolling down make logo smaller
const navbarLogo = document.querySelector('.msthebearLogo')

window.addEventListener('scroll', function (e) {
    const lastPosition = window.scrollY
    if (lastPosition > 100) {
        navbarLogo.classList.add('navLogoScroll')
    } else {
        navbarLogo.classList.remove('navLogoScroll')
    }
})

const goUp = document.querySelector(".bi-arrow-up-square-fill")

window.addEventListener('scroll', function (e) {
    const lastPosition = window.scrollY
    if (lastPosition > 150) {
        goUp.style.display = "block";
    } else {
        goUp.style.display = "none";
    }
})

// Pause/play on click video on the monitor
var myVideo = document.getElementById("videoOnTv");
myVideo.addEventListener('click', function (e) {
    e.preventDefault();
    this[this.paused ? 'play' : 'pause']();
});