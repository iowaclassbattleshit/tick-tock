const years = [
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021
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
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
]

const posMap = {

}

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

function getCurrentDateObject() {
    const date = new Date();
    return {
        year: date.getFullYear(),
        month: months[date.getMonth()],
        day: date.getDate()
    }
}

function getPos(value, array) {
    array = array.reverse();
    for (let i = 0; i < array.length + 1; i++) {
        if (value === array[i]) {
            return i;
        }
    }
    return 0;
}

function rotate(tag, pos, arrayLength) {
    let deg = 0;
    const lastPos = posMap[tag] || 0;

    if (pos > lastPos) {
        console.log(pos, lastPos);
        deg = (360 / arrayLength) * (pos - lastPos);
    } else if (pos < lastPos) {
        deg = (360 / arrayLength) * (lastPos - pos);
    } else if (pos === lastPos) {
        console.log("hhh", pos, lastPos)
        deg = (360 / arrayLength) * pos;
    }

    posMap[tag] = pos;

    $(`#${tag}`).css({
        "-webkit-transform": `rotate(${deg}deg)`,
        "-moz-transform": `rotate(${deg}deg)`,
        "-ms-transform": `rotate(${deg}deg)`,
        "transform": `rotate(${deg}deg)`
    });
}

(function init() {
    const date = getCurrentDateObject();
    setTimeout(() => {
        create("r3", years);
        $(".year-text").fadeTo(500, 1, function () {
            rotate("r3", getPos(date.year, years), years.length);
        });
    }, 500);

    setTimeout(() => {
        create("r2", months);
        $(".month-text").fadeTo(500, 1, function () {
            rotate("r2", getPos(date.month, months), months.length);
        });
    }, 1000);

    setTimeout(() => {
        create("r1", days);
        $(".day-text").fadeTo(500, 1, function () {
            rotate("r1", getPos(date.day, days), days.length);
        });
    }, 1500);

    setTimeout(() => {
        rotate("r3", getPos(2021, years), years.length);
        rotate("r2", getPos(date.month, months), months.length);
        rotate("r1", getPos(date.day, days), days.length);
    }, 10000);
})()
