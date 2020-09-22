$(function() {
    $(document).ready(function () {

        let weekday = new Date().getDay()

        if(weekday === 0) {
            $('.sun').css('color', '#31bcaa')
        } else if(weekday === 1) {
            $('.mon').css('color', '#31bcaa')
        } else if (weekday === 2) {
            $('.tue').css('color', '#31bcaa')
        } else if (weekday === 3) {
            $('.wen').css('color', '#db3956')
        } else if (weekday === 4) {
            $('.thu').css('color', '#31bcaa')
        } else if (weekday === 5) {
            $('.fri').css('color', '#db3956')
        } else if (weekday === 6) {
            $('.sat').css('color', '#db3956')
        }

    });
});