$(function() {
    $(document).ready(function () {

        const weekday = $('.weekday').val();
        let weekday_nr = 0;

        if (weekday === 'Montag') {
            weekday_nr = 0;
        } else if (weekday === 'Dienstag') {
            weekday_nr = 1;
        } else if (weekday === 'Mittwoch') {
            weekday_nr = 2;
        } else if (weekday === 'Donnerstag') {
            weekday_nr = 3;
        } else if (weekday === 'Freitag') {
            weekday_nr = 4;
        } else if (weekday === 'Samstag') {
            weekday_nr = 5;
        } else if (weekday === 'Sonntag') {
            weekday_nr = 6;
        }

        if (new Date().getDate() === weekday_nr) {
            $('weekday').addClass('highlightdate');
        }
    });
});