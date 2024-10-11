/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "../particles.json", function () {
    console.log("callback - particles.js config loaded");
});

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
