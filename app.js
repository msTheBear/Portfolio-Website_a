// Targeting tabs START

const triggerTabListAboutMe = document.querySelectorAll('#myTab button')
triggerTabListAboutMe.forEach(triggerElaboutme => {
    const tabTrigger = new bootstrap.Tab(triggerElaboutme)

    triggerElaboutme.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
    })
})


const triggerTabListProjects = document.querySelectorAll('#myTab button')
triggerTabListProjects.forEach(triggerProjects => {
    const tabTrigger = new bootstrap.Tab(triggerProjects)

    triggerProjects.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
    })
})

const triggerTabListContact = document.querySelectorAll('#myTab button')
triggerTabListContact.forEach(triggerElContact => {
    const tabTrigger = new bootstrap.Tab(triggerElContact)

    triggerElContact.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
    })
})

const triggerElaboutme = document.querySelector('#myTab button[data-bs-target="#home"]')
const triggerElProjects = document.querySelector('#myTab button[data-bs-target="#projects"]')
const triggerElContact = document.querySelector('#myTab button[data-bs-target="#contact"]')

// Targeting tabs END


const mainThumbnail = document.getElementById("p_main");
const projectTitle = document.getElementById("p_name");
const githubLink = document.getElementById("p_github");
const website = document.getElementById("p_link");
const description = document.getElementById("p_description");
const mainThumbnailLink = document.getElementById("mainLink");
const screenshotThumbnail1 = document.getElementById("p_mini1");
const screenshotThumbnailModal1 = document.getElementById("p_mini_modal1");
const screenshotThumbnail2 = document.getElementById("p_mini2");
const screenshotThumbnailModal2 = document.getElementById("p_mini_modal2");
const screenshotThumbnail3 = document.getElementById("p_mini3");
const screenshotThumbnailModal3 = document.getElementById("p_mini_modal3");
const screenshotThumbnail4 = document.getElementById("p_mini4");
const screenshotThumbnailModal4 = document.getElementById("p_mini_modal4");

const technologyUsed = document.getElementById("technologyUsedText");


function goHome() {
    bootstrap.Tab.getInstance(triggerElaboutme).show();
}

function projectBoopGames() {
    bootstrap.Tab.getInstance(triggerElProjects).show();
    mainThumbnail.focus();
    mainThumbnail.src = "./projects/boopgames/main.webp";
    projectTitle.innerHTML = "BOOPGAMES";
    githubLink.href = "https://github.com/msTheBear/BoopGames";
    website.innerHTML = "WEBSITE";
    website.href = "https://msthebear.github.io/BoopGames/";
    description.innerHTML = `Game database website built using RAWG's API. Users can find games, view screenshots, check ratings, read game description and game info (platform availability, release date, genre, developer).<br>This website is Accessibility friendly.`;
    mainThumbnailLink.href = "https://msthebear.github.io/BoopGames/";
    mainThumbnail.alt = "BoopGames main thumbnail";
    screenshotThumbnail1.src = "./projects/boopgames/boopgames_th.webp";
    screenshotThumbnail1.alt = "BoopGames thumbnail 1";
    screenshotThumbnailModal1.src = "./projects/boopgames/boopgames_th.webp";
    screenshotThumbnailModal1.alt = "BoopGames thumbnail 1";
    screenshotThumbnail2.src = "./projects/boopgames/screenshot_1.webp";
    screenshotThumbnail2.alt = "BoopGames thumbnail 2";
    screenshotThumbnailModal2.src = "./projects/boopgames/screenshot_1.webp";
    screenshotThumbnailModal2.alt = "BoopGames thumbnail 2";
    screenshotThumbnail3.src = "./projects/boopgames/screenshot_2.webp";
    screenshotThumbnail3.alt = "BoopGames thumbnail 3";
    screenshotThumbnailModal3.src = "./projects/boopgames/screenshot_2.webp";
    screenshotThumbnailModal3.alt = "BoopGames thumbnail 3";
    screenshotThumbnail4.src = "./projects/boopgames/screenshot_3.webp";
    screenshotThumbnail4.alt = "BoopGames thumbnail 4";
    screenshotThumbnailModal4.src = "./projects/boopgames/screenshot_3.webp";
    screenshotThumbnailModal4.alt = "BoopGames thumbnail 4";
    technologyUsed.innerHTML = "Technologies used: HTML5, CSS3, JavaScript, Bootstrap, API";
}

function projectPortfolio() {
    bootstrap.Tab.getInstance(triggerElProjects).show();
    mainThumbnail.focus();
    mainThumbnail.src = "./projects/msthebear/main.webp";
    projectTitle.innerHTML = "MICHAL SZYMCZAK PORTFOLIO";
    githubLink.href = "https://github.com/msTheBear/videography-portfolio";
    website.innerHTML = "WEBSITE";
    website.href = "https://msthebear.github.io/videography-portfolio/";
    description.innerHTML = `Videography portfolio with showreel built into the TV, showcasing Videographer's projects, equipment and software he uses and clients he works with.<br>This website is Accessibility friendly.`;
    mainThumbnailLink.href = "https://msthebear.github.io/videography-portfolio/";
    mainThumbnail.alt = "Portfolio main thumbnail";
    screenshotThumbnail1.src = "./projects/msthebear/msthebear_th.webp";
    screenshotThumbnail1.alt = "Portfolio thumbnail 1";
    screenshotThumbnailModal1.src = "./projects/msthebear/msthebear_th.webp";
    screenshotThumbnailModal1.alt = "Portfolio thumbnail 1";
    screenshotThumbnail2.src = "./projects/msthebear/screenshot_1.webp";
    screenshotThumbnail2.alt = "Portfolio thumbnail 2";
    screenshotThumbnailModal2.src = "./projects/msthebear/screenshot_1.webp";
    screenshotThumbnailModal2.alt = "Portfolio thumbnail 2";
    screenshotThumbnail3.src = "./projects/msthebear/screenshot_2.webp";
    screenshotThumbnail3.alt = "Portfolio thumbnail 3";
    screenshotThumbnailModal3.src = "./projects/msthebear/screenshot_2.webp";
    screenshotThumbnailModal3.alt = "Portfolio thumbnail 3";
    screenshotThumbnail4.src = "./projects/msthebear/screenshot_3.webp";
    screenshotThumbnail4.alt = "Portfolio thumbnail 4";
    screenshotThumbnailModal4.src = "./projects/msthebear/screenshot_3.webp";
    screenshotThumbnailModal4.alt = "Portfolio thumbnail 4";
    technologyUsed.innerHTML = "Technologies used: HTML5, CSS3, JavaScript, Bootstrap, Sass";
}

function projectFilmnuts() {
    bootstrap.Tab.getInstance(triggerElProjects).show();
    mainThumbnail.focus();
    mainThumbnail.src = "./projects/filmnuts/main.webp";
    projectTitle.innerHTML = "FILMNUTS";
    githubLink.href = "";
    website.innerHTML = "WEBSITE";
    website.href = "https://www.msthebear.com/filmnuts/";
    description.innerHTML = "Professional video services website created in WordPress, highlighting key information about the company and what they do. Visitors can request a quote directly from this page to streamline their inquiry process, they can also view prices and delivery time. An important aspect for the company was also to include before/after sliders of their color corrected images. ";
    mainThumbnailLink.href = "https://www.msthebear.com/filmnuts/";
    mainThumbnail.alt = "FilmNuts main thumbnail";
    screenshotThumbnail1.src = "./projects/filmnuts/filmnuts_th.webp";
    screenshotThumbnail1.alt = "FilmNuts thumbnail 1";
    screenshotThumbnailModal1.src = "./projects/filmnuts/filmnuts_th.webp";
    screenshotThumbnailModal1.alt = "FilmNuts thumbnail 1";
    screenshotThumbnail2.src = "./projects/filmnuts/filmnuts_1.webp";
    screenshotThumbnail2.alt = "FilmNuts thumbnail 2";
    screenshotThumbnailModal2.src = "./projects/filmnuts/filmnuts_1.webp";
    screenshotThumbnailModal2.alt = "FilmNuts thumbnail 2";
    screenshotThumbnail3.src = "./projects/filmnuts/filmnuts_2.webp";
    screenshotThumbnail3.alt = "FilmNuts thumbnail 3";
    screenshotThumbnailModal3.src = "./projects/filmnuts/filmnuts_2.webp";
    screenshotThumbnailModal3.alt = "FilmNuts thumbnail 3";
    screenshotThumbnail4.src = "./projects/filmnuts/filmnuts_3.webp";
    screenshotThumbnail4.alt = "FilmNuts thumbnail 4";
    screenshotThumbnailModal4.src = "./projects/filmnuts/filmnuts_3.webp";
    screenshotThumbnailModal4.alt = "FilmNuts thumbnail 4";
    technologyUsed.innerHTML = "Technologies used: HTML5, CSS3, WordPress";
}

function projectDevPortfolio() {
    bootstrap.Tab.getInstance(triggerElProjects).show();
    mainThumbnail.focus();
    mainThumbnail.src = "./projects/dev portfolio/main.webp";
    projectTitle.innerHTML = "WEB DEV PORTFOLIO";
    githubLink.href = "https://github.com/msTheBear/Dev-Portfolio";
    website.innerHTML = "WEBSITE";
    website.href = "https://msthebear.github.io/Dev-Portfolio/";
    description.innerHTML = `Portfolio website to showcase web dev projects using a variety of technologies.<br>This website is Accessibility friendly.`;
    mainThumbnailLink.href = "https://msthebear.github.io/Dev-Portfolio/";
    mainThumbnail.alt = "Web dev portfolio main thumbnail";
    screenshotThumbnail1.src = "./projects/dev portfolio/portfolio_th.webp";
    screenshotThumbnail1.alt = "Web dev portfolio thumbnail 1";
    screenshotThumbnailModal1.src = "./projects/dev portfolio/portfolio_th.webp";
    screenshotThumbnailModal1.alt = "Web dev portfolio thumbnail 1";
    screenshotThumbnail2.src = "./projects/dev portfolio/screenshot_1.webp";
    screenshotThumbnail2.alt = "Web dev portfolio thumbnail 2";
    screenshotThumbnailModal2.src = "./projects/dev portfolio/screenshot_1.webp";
    screenshotThumbnailModal2.alt = "Web dev portfolio thumbnail 2";
    screenshotThumbnail3.src = "./projects/dev portfolio/screenshot_2.webp";
    screenshotThumbnail3.alt = "Web dev portfolio thumbnail 3";
    screenshotThumbnailModal3.src = "./projects/dev portfolio/screenshot_2.webp";
    screenshotThumbnailModal3.alt = "Web dev portfolio thumbnail 3";
    screenshotThumbnail4.src = "./projects/dev portfolio/screenshot_3.webp";
    screenshotThumbnail4.alt = "Web dev portfolio thumbnail 4";
    screenshotThumbnailModal4.src = "./projects/dev portfolio/screenshot_3.webp";
    screenshotThumbnailModal4.alt = "Web dev portfolio thumbnail 4";
    technologyUsed.innerHTML = "Technologies used: HTML5, CSS3, JavaScript, Bootstrap, Sass";
}

function projectPortfolioOld() {
    bootstrap.Tab.getInstance(triggerElProjects).show();
    mainThumbnail.focus();
    mainThumbnail.src = "./projects/michalportfolio/main.webp";
    projectTitle.innerHTML = "MICHAL SZYMCZAK PORTFOLIO (OLD)";
    githubLink.href = "";
    website.innerHTML = "WEBSITE";
    website.href = "https://www.msthebear.com/oldwebsite/";
    description.innerHTML = "Videography portfolio created in WordPress showcasing Videographer's projects, equipment and software he uses.";
    mainThumbnailLink.href = "https://www.msthebear.com/oldwebsite/";
    mainThumbnail.alt = "Michal Szymczak portfolio (old) main thumbnail";
    screenshotThumbnail1.src = "./projects/michalportfolio/michalportfolio_th.webp";
    screenshotThumbnail1.alt = "Michal Szymczak old portfolio thumbnail 1";
    screenshotThumbnailModal1.src = "./projects/michalportfolio/michalportfolio_th.webp";
    screenshotThumbnailModal1.alt = "Michal Szymczak old portfolio thumbnail 1";
    screenshotThumbnail2.src = "./projects/michalportfolio/screenshot_1.webp";
    screenshotThumbnail2.alt = "Michal Szymczak old portfolio thumbnail 2";
    screenshotThumbnailModal2.src = "./projects/michalportfolio/screenshot_1.webp";
    screenshotThumbnailModal2.alt = "Michal Szymczak old portfolio thumbnail 2";
    screenshotThumbnail3.src = "./projects/michalportfolio/screenshot_2.webp";
    screenshotThumbnail3.alt = "Michal Szymczak old portfolio thumbnail 3";
    screenshotThumbnailModal3.src = "./projects/michalportfolio/screenshot_2.webp";
    screenshotThumbnailModal3.alt = "Michal Szymczak old portfolio thumbnail 3";
    screenshotThumbnail4.src = "./projects/michalportfolio/screenshot_3.webp";
    screenshotThumbnail4.alt = "Michal Szymczak old portfolio thumbnail 4";
    screenshotThumbnailModal4.src = "./projects/michalportfolio/screenshot_3.webp";
    screenshotThumbnailModal4.alt = "Michal Szymczak old portfolio thumbnail 4";
    technologyUsed.innerHTML = "Technologies used: HTML5, CSS3, WordPress";
}

function projectMonikaPul() {
    bootstrap.Tab.getInstance(triggerElProjects).show();
    mainThumbnail.focus();
    mainThumbnail.src = "./projects/pulmonika/main.webp";
    projectTitle.innerHTML = "MONIKA PUL PORTFOLIO";
    githubLink.href = "";
    website.innerHTML = "WEBSITE";
    website.href = "https://pulmonika.com/";
    description.innerHTML = "Editor/Colorist's personal website showcasing their work including showreels, instagram posts and credits list. Website was created using WordPress.";
    mainThumbnailLink.href = "https://pulmonika.com/";
    mainThumbnail.alt = "Monika Pul portfolio main thumbnail";
    screenshotThumbnail1.src = "./projects/pulmonika/pulmonika_th.webp";
    screenshotThumbnail1.alt = "Monika Pul portfolio thumbnail 1";
    screenshotThumbnailModal1.src = "./projects/pulmonika/pulmonika_th.webp";
    screenshotThumbnailModal1.alt = "Monika Pul portfolio thumbnail 1";
    screenshotThumbnail2.src = "./projects/pulmonika/screenshot_1.webp";
    screenshotThumbnail2.alt = "Monika Pul portfolio thumbnail 2";
    screenshotThumbnailModal2.src = "./projects/pulmonika/screenshot_1.webp";
    screenshotThumbnailModal2.alt = "Monika Pul portfolio thumbnail 2";
    screenshotThumbnail3.src = "./projects/pulmonika/screenshot_2.webp";
    screenshotThumbnail3.alt = "Monika Pul portfolio thumbnail 3";
    screenshotThumbnailModal3.src = "./projects/pulmonika/screenshot_2.webp";
    screenshotThumbnailModal3.alt = "Monika Pul portfolio thumbnail 3";
    screenshotThumbnail4.src = "./projects/pulmonika/screenshot_3.webp";
    screenshotThumbnail4.alt = "Monika Pul portfolio thumbnail 4";
    screenshotThumbnailModal4.src = "./projects/pulmonika/screenshot_3.webp";
    screenshotThumbnailModal4.alt = "Monika Pul portfolio thumbnail 4";
    technologyUsed.innerHTML = "Technologies used: HTML5, CSS3, WordPress";
}

function projectFoxIt() {
    bootstrap.Tab.getInstance(triggerElProjects).show();
    mainThumbnail.focus();
    mainThumbnail.src = "./projects/foxit/main.webp";
    projectTitle.innerHTML = "FOX IT - GAME";
    githubLink.href = "";
    website.innerHTML = "WEBSITE";
    website.href = "https://play.unity.com/mg/other/build-fox-it";
    description.innerHTML = `I'm interested in making games and this is my passion project created in Unity, based on a very popular game called "Flappy Bird". I'm currently learning Godot engine.`;
    mainThumbnailLink.href = "https://play.unity.com/mg/other/build-fox-it";
    mainThumbnail.alt = "Fox It main thumbnail";
    screenshotThumbnail1.src = "./projects/foxit/foxit_th.webp";
    screenshotThumbnail1.alt = "Fox It thumbnail 1";
    screenshotThumbnailModal1.src = "./projects/foxit/foxit_th.webp";
    screenshotThumbnailModal1.alt = "Fox It thumbnail 1";
    screenshotThumbnail2.src = "./projects/foxit/screenshot_1.webp";
    screenshotThumbnail2.alt = "Fox It thumbnail 2";
    screenshotThumbnailModal2.src = "./projects/foxit/screenshot_1.webp";
    screenshotThumbnailModal2.alt = "Fox It thumbnail 2";
    screenshotThumbnail3.src = "./projects/foxit/screenshot_2.webp";
    screenshotThumbnail3.alt = "Fox It thumbnail 3";
    screenshotThumbnailModal3.src = "./projects/foxit/screenshot_2.webp";
    screenshotThumbnailModal3.alt = "Fox It thumbnail 3";
    screenshotThumbnail4.src = "./projects/foxit/screenshot_3.webp";
    screenshotThumbnail4.alt = "Fox It thumbnail 4";
    screenshotThumbnailModal4.src = "./projects/foxit/screenshot_3.webp";
    screenshotThumbnailModal4.alt = "Fox It thumbnail 4";
    technologyUsed.innerHTML = "Technologies used: C#, Unity";
}