const years = [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020"
]

const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
]

const days = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"
]

function create(tag, array) {
    const ring = document.getElementById(tag);
    if (!ring) {
        return;
    }

    const header = ring.getElementsByTagName("h2")[0];
    if (!header) {
        return;
    }

    for (let i = 1; i < array.length + 1; i++) {
        const span = document.createElement("span");
        span.classList.add(`btn${i}`);
        span.innerText = array[i - 1];

        header.appendChild(span);
    }
}

function getDateObject() {
    const date = new Date();
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    }
}

function rotate(input, sections, ring) {
    let range = 360;
    var sectionWidth = range / sections;
    var initialRotation = sectionWidth / 2;
    var rotateAmount = initialRotation - sectionWidth * (input - 1);

    $(ring).css({
        "-webkit-transform": "rotate(" + rotateAmount + "deg)",
        "-moz-transform": "rotate(" + rotateAmount + "deg)",
        "-ms-transform": "rotate(" + rotateAmount + "deg)",
        "transform": "rotate(" + rotateAmount + "deg)"
    });
}

function rot(tag, pos) {
    const objects = document.getElementById(tag);
    const content = objects.getElementsByTagName("h2");
    const children = content[0].children;
    
    const deg = 360 / (pos / children.length);

    $(`#${tag}`).css({
        "-webkit-transform": "rotate(" + deg + "deg)",
        "-moz-transform": "rotate(" + deg + "deg)",
        "-ms-transform": "rotate(" + deg + "deg)",
        "transform": "rotate(" + deg + "deg)"
    });
}

(function init() {
    setTimeout(() => {
        create("r3", years);
        $(".year-text").fadeTo(500, 1, function () {
            rot("r3", 71);
        });
    }, 500);

    setTimeout(() => {
        create("r2", months);
        $(".month-text").fadeTo(500, 1, function () {
            rotate(2, 12, "#r2");
        });
    }, 1000);

    setTimeout(() => {
        create("r1", days);
        $(".day-text").fadeTo(500, 1, function () {
            rotate(23, 31, "#r1");
        });
    }, 1500);
})()
