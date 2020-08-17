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
        $(".year-text").fadeTo(500, 1, function () {
            rot("r3", 71);
        });
    }, 500);

    setTimeout(() => {
        $(".month-text").fadeTo(500, 1, function () {
            rotate(2, 12, "#r2");
        });
    }, 1000);

    setTimeout(() => {
        $(".day-text").fadeTo(500, 1, function () {
            rotate(23, 31, "#r1");
        });
    }, 1500);
})()
