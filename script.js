/* =========================================
   ❤️ MEMORY GALLERY
   GitHub Releases Auto Loader
========================================= */


/* =========================
   GITHUB SETTINGS
========================= */

const USERNAME = "data070508";
const REPOSITORY = "school1";


const API =
`https://api.github.com/repos/${USERNAME}/${REPOSITORY}/releases`;


/* =========================
   MEMORY QUOTES
========================= */

const quotes = [

    "A moment frozen forever ❤️",

    "The best chapter of our lives ✨",

    "Some memories never fade 🌙",

    "Friends, laughter and endless stories 🌸",

    "A beautiful piece of our journey ⭐",

    "Happiness captured in a second 💫",

    "Together is our favorite place ❤️",

    "The story continues forever 🌹"

];


/* =========================
   FONT STYLES
========================= */

const fonts = [

    "font-love",
    "font-dream",
    "font-royal",
    "font-modern"

];


/* =========================
   FILE FORMATS
========================= */

const images = [
    "jpg",
    "jpeg",
    "png",
    "webp",
    "gif",
    "avif"
];


const videos = [
    "mp4",
    "webm",
    "mov",
    "m4v"
];


/* =========================
   LOAD MEMORIES
========================= */

async function loadMemories() {

    try {

        const response =
            await fetch(API);


        const releases =
            await response.json();


        let files = [];


        // Get all release assets
        releases.forEach(release => {

            release.assets.forEach(asset => {

                files.push(asset);

            });

        });


        // Newest files first
        files.reverse();


        createGallery(files);


    }

    catch(error) {

        console.log(
            "Failed to load memories",
            error
        );

        document.body.innerHTML =
        `
        <h2 style="
            color:white;
            text-align:center;
            padding:40px;">
            
            💔 Unable to load memories
            
        </h2>
        `;
    }

}


/* =========================
   CREATE GALLERY
========================= */

function createGallery(files) {


    const gallery =
        document.getElementById("gallery");


    files.forEach(file => {


        const extension =
        file.name
        .split(".")
        .pop()
        .toLowerCase();


        let media = "";


        /* IMAGE */
        if(images.includes(extension)) {


            media =
            `
            <img 
            src="${file.browser_download_url}"
            loading="lazy">
            `;

        }


        /* VIDEO */
        else if(videos.includes(extension)) {


            media =
            `
            <video
            class="auto-video"
            muted
            loop
            playsinline>
            
            <source
            src="${file.browser_download_url}">
            
            </video>
            `;

        }


        else {
            return;
        }


        const quote =
        quotes[
            Math.floor(
            Math.random()
            * quotes.length
            )
        ];


        const font =
        fonts[
            Math.floor(
            Math.random()
            * fonts.length
            )
        ];


        gallery.innerHTML +=
        `
        <section class="memory">

            ${media}


            <div class="caption ${font}">

                <h2>
                    ${quote}
                </h2>


            </div>

        </section>
        `;

    });


    startVideoObserver();


    hideLoader();

}


/* =========================
   AUTO PLAY VIDEOS
========================= */

function startVideoObserver() {


    const videos =
    document.querySelectorAll(
        ".auto-video"
    );


    const observer =
    new IntersectionObserver(

        entries => {


        entries.forEach(entry => {


            const video =
            entry.target;


            if(entry.isIntersecting) {


                video.play();


            }

            else {


                video.pause();


            }


        });


    },


    {
        threshold: 0.6
    }


    );


    videos.forEach(video => {

        observer.observe(video);

    });

}


/* =========================
   HIDE LOADER
========================= */

function hideLoader() {


    setTimeout(() => {


        document
        .getElementById("loader")
        .style.display = "none";


    }, 1000);

}


/* =========================
   START APP
========================= */

loadMemories();
