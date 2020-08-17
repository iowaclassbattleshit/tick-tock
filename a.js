/*
 * Cirulcar Calendar Display.js
 * Matthew Juggins
 * Change log:
 * 		25/09/16 - Quick fix to day of the week
 */

$(function () {

    var date, dayName, day, month, year;
    var range = 270,
        sectionsDayName = 7,
        sectionsDay = 31,
        sectionsMonth = 12,
        charactersDayName = 3,
        charactersDay = 2,
        charactersMonth = 3,
        dayColor = '#FF2D55',
        monthColor = '#007AFF',
        dayNameColor = '#4CD964';


    // Rotate the selected ring the correct amount and illuminate the correct characters of the ring text
    function rotateRing(input, sections, characters, ring, text, color) {
        var sectionWidth = range / sections;
        var initialRotation = 135 - (sectionWidth / 2);
        var rotateAmount = initialRotation - sectionWidth * (input - 1);
        var start = (characters * (input - 1)) + (input - 1) + 1;

        $(ring).css({
            '-webkit-transform': 'rotate(' + rotateAmount + 'deg)',
            '-moz-transform': 'rotate(' + rotateAmount + 'deg)',
            '-ms-transform': 'rotate(' + rotateAmount + 'deg)',
            'transform': 'rotate(' + rotateAmount + 'deg)'
        });

        for (var i = start; i < start + characters; i++) {
            $(text).children('.char' + i).css({
                'color': color
            });
        }
    }

    (function init() {
        date = new Date();
        dayName = date.getDay(); // Day of week (1-7)
        day = date.getDate(); // Get current date (1-31)
        month = date.getMonth() + 1; // Current month (1-12)
        if (dayName == 0) {
            dayName = 7;
        }

        setTimeout(function () {
            $('.year-text').fadeTo(500, 1, function () {
                rotateRing(dayName, sectionsDayName, charactersDayName, '#r4', '.year-name-text', dayNameColor);
            });
        }, 500);

        setTimeout(function () {
            $('.month-text').fadeTo(500, 1, function () {
                rotateRing(month, sectionsMonth, charactersMonth, '#r2', '.month-text', monthColor);
            });
        }, 1000);

        setTimeout(function () {
            $('.day-text').fadeTo(500, 1, function () {
                rotateRing(day, sectionsDay, charactersDay, '#r3', '.day-text', dayColor);
            });
        }, 1500);

        setTimeout(function () {
            $('.day-name-text').fadeTo(500, 1, function () {
                rotateRing(dayName, sectionsDayName, charactersDayName, '#r1', '.day-name-text', dayNameColor);
            });
        }, 2000);
    })();
});

function jub() {
    console.log("h");
}