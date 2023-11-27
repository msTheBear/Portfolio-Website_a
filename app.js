// load spinner START

const preloader = document.querySelector(".preloaderWrapper");

window.addEventListener("load", function () {
    preloader.classList.add("fadeOut");

});

// load spinner END


// Show/hide videoplayer START

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
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

// Show/hide videoplayer END


// Show filtered elements START

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Show filtered elements END


// Hide elements that are not selected START

function removeClass(element, name) {
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

// Hide elements that are not selected END


// Highlight active button START

var btnContainer = document.getElementById("filterContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activeMy");
        current[0].className = current[0].className.replace(" activeMy", "");
        this.className += " activeMy";
    });
}

// Highlight active button END


const iframe = document.querySelector("iframe");
const iframePlayer = new Vimeo.Player(iframe);
const videoPlayer = document.querySelector("#videoPlayer");
const scrollToVideography = document.getElementById("portfolioVideography");
const transcriptContainer = document.getElementById("transcriptContainer");
const transcriptText = document.getElementById("transcriptText");
const playButton = document.getElementById("projectButtonContainer");
transcriptContainer.style.display = "none";


// Hide videoplayer START

function hideCollapse() {
    bsCollapse.hide();
    playButton.style.visibility = "hidden";
    playButton.style.opacity = "0";
    iframePlayer.pause();
}

// Hide videoplayer END


// Show videoplayer START

function showCollapse() {
    bsCollapse.show()
}

// Show videoplayer END


// Press play/pause to show/hide overlay PLAY button START

playButton.onclick = function () {
    playButton.style.display = "none";
    iframePlayer.play();
}
iframePlayer.on("pause", function () {
    playButton.style.display = "block";
});
iframePlayer.on("play", function () {
    playButton.style.display = "none";
});

// Press play/pause to show/hide overlay PLAY button END


// Add/remove to a project START

function delayPlayButton() {
    setTimeout(() => {
        playButton.style.visibility = "visible";
        playButton.style.opacity = "1";
    }, 500);
}

function play16x9() {
    videoPlayer.classList.remove("ratio-16x10");
    videoPlayer.classList.add("ratio");
    videoPlayer.classList.add("ratio-16x9");
    playButton.focus();
}

function play16x10() {
    videoPlayer.classList.remove("ratio-16x9");
    videoPlayer.classList.add("ratio");
    videoPlayer.classList.add("ratio-16x10");
    playButton.focus();
}

// Add/remove to a project END


// Play video project START

function videoShowreel() {
    transcriptContainer.style.display = "none";
    iframePlayer.loadVideo(567017878);
    scrollToVideography.scrollIntoView();
    delayPlayButton();
    play16x9();
}

function videoSupper() {
    iframePlayer.loadVideo(560863741);
    transcriptText.innerHTML = "";
    scrollToVideography.scrollIntoView();
    delayPlayButton();
    play16x9();
    transcriptContainer.style.display = "block";
    transcriptText.innerHTML = "It's been days since I ate something. I'm losing my mind. Who cares about you? I need food even more, look at me. It's because of fat people that we were over producing food to feed fucking fat assess like you. What a waste... Even now, there's nothing left outside. And there is the last can of food. You only think about yourself you fat bastard. Fuck off, it's my life! My body is my temple. Temple of fat, that's for sure. Be quiet, it's time to eat. This is our last supper and I'll be your Judas.";
}

function videoWords() {
    iframePlayer.loadVideo(560866488);
    transcriptText.innerHTML = "";
    scrollToVideography.scrollIntoView();
    delayPlayButton();
    play16x9();
    transcriptContainer.style.display = "block";
    transcriptText.innerHTML = "Chicken corma sound delicious. An aromatic aroma with infused flavourings. Who writes these descriptions? Words of seduction babe. Whatever, I'm starving. Go on, you go first. Could I get chicken decamasala with one nam and a glass of water, please? So sad... And you madam? I'll have the jira paneer Indian cheese in a creeeamy yoghurt gravy infused with fresh green chilis and spiced with cumin seeds. ";
}

function videoForks() {
    transcriptContainer.style.display = "none";
    iframePlayer.loadVideo(560860674);
    scrollToVideography.scrollIntoView();
    delayPlayButton();
    play16x10();
}

function videoAlim() {
    transcriptContainer.style.display = "none";
    iframePlayer.loadVideo(568522345);
    scrollToVideography.scrollIntoView();
    delayPlayButton();
    play16x9();
}

function videoTrain() {
    transcriptContainer.style.display = "none";
    iframePlayer.loadVideo(566996606);
    scrollToVideography.scrollIntoView();
    delayPlayButton();
    play16x10();
}

function videoBrios() {
    transcriptContainer.style.display = "none";
    iframePlayer.loadVideo(560859524);
    scrollToVideography.scrollIntoView();
    delayPlayButton();
    play16x10();
}

function videoTheBanc() {
    transcriptContainer.style.display = "none";
    iframePlayer.loadVideo(560886825);
    scrollToVideography.scrollIntoView();
    delayPlayButton();
    play16x9();
}

function videoPride() {
    transcriptContainer.style.display = "none";
    iframePlayer.loadVideo(564151962);
    scrollToVideography.scrollIntoView();
    delayPlayButton();
    play16x9();
}

function videoMrMrs() {
    transcriptContainer.style.display = "none";
    iframePlayer.loadVideo(376793654);
    scrollToVideography.scrollIntoView();
    delayPlayButton();
    play16x9();
}

// Play video project END


// When scrolling down make logo smaller START

const navbarLogo = document.querySelector(".msthebearLogo")

window.addEventListener("scroll", function (e) {
    const lastPosition = window.scrollY
    if (lastPosition > 100) {
        navbarLogo.classList.add("navLogoScroll")
    } else {
        navbarLogo.classList.remove("navLogoScroll")
    }
})

// When scrolling down make logo smaller START


// Press "up" button to go to the top START

const goUp = document.querySelector(".bi-arrow-up-square-fill")

window.addEventListener("scroll", function (e) {
    const lastPosition = window.scrollY
    if (lastPosition > 150) {
        goUp.style.display = "block";
    } else {
        goUp.style.display = "none";
    }
})

// Press "up" button to go to the top END


// Pause/play on click video on the monitor START

var myVideo = document.getElementById("videoOnTv");
myVideo.addEventListener("click", function (e) {
    e.preventDefault();
    this[this.paused ? "play" : "pause"]();
});

// Pause/play on click video on the monitor END