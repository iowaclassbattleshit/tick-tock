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

function getBtn(tag, pos) {
    return document.getElementById(tag)
        .getElementsByClassName(`btn${pos}`)[0];
}

function removeAvatarState(tag, pos) {
    console.log(getBtn(tag, pos).classList);
    getBtn(tag, pos).classList.remove("glow");
    console.log(getBtn(tag, pos).classList);
}

function addAvatarState(tag, pos) {
    getBtn(tag, pos).classList.add("glow");
}

function rotate(tag, pos, arrayLength) {
    let deg = 0;
    const lastPos = posMap[tag] || 0;

    if (pos > lastPos) {
        deg = (360 / arrayLength) * (pos - lastPos);
    } else if (pos < lastPos) {
        deg = (360 / arrayLength) * (lastPos - pos);
    } else if (pos === lastPos) {
        deg = (360 / arrayLength) * pos;
    }

    posMap[tag] = pos;

    $(`#${tag}`).css({
        "-webkit-transform": `rotate(${deg}deg)`,
        "-moz-transform": `rotate(${deg}deg)`,
        "-ms-transform": `rotate(${deg}deg)`,
        "transform": `rotate(${deg}deg)`
    });

    removeAvatarState(tag, posMap[tag]);
    setTimeout(() => {
        addAvatarState(tag, pos);
    }, 5100);
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
