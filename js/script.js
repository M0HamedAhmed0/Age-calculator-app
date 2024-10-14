/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "/particles.json", function () {
    console.log("particles.js loaded - callback");
});

particlesJS(
    "particles-js",

    {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: ["circle", "triangle", "star"],
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
        config_demo: {
            hide_card: false,
            background_color: "#b61924",
            background_image: "",
            background_position: "50% 50%",
            background_repeat: "no-repeat",
            background_size: "cover",
        },
    }
);

///////////////////////

let inputDay = document.querySelector("#day");
let inputMonth = document.querySelector("#month");
let inputYear = document.querySelector("#years");
let click = document.querySelector("#click");
let restart = document.querySelector("#restart");

function getAge() {
    let days = inputDay.value;
    let months = inputMonth.value;
    let years = inputYear.value;

    ////////
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    ////////
    let age = currentYear - years;
    let m = currentMonth - months;
    let d = currentDay - days;
    ///////
    document.getElementById("userYears").innerHTML = age;
    document.getElementById("userMonths").innerHTML = m;
    document.getElementById("userDays").innerHTML = d;
}
click.addEventListener("click", function (e) {
    e.preventDefault();
    if (
        inputDay.value == "" ||
        inputMonth.value == "" ||
        inputYear.value == ""
    ) {
        document.querySelector("#hidden").classList.remove("d-none");
    } else {
        document.querySelector("#hidden").classList.add("d-none");
        getAge();
    }
});

restart.addEventListener("click", function (e) {
    e.preventDefault();
    inputDay.value = "";
    inputMonth.value = "";
    inputYear.value = "";
    document.querySelector("#hidden").classList.add("d-none");
    document.getElementById("userYears").innerHTML = "-- ";
    document.getElementById("userMonths").innerHTML = "-- ";
    document.getElementById("userDays").innerHTML = "-- ";
});
