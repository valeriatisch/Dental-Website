$(function(){
    $(document).ready(function () {

        //NAV ITEM
        $('.nav-item a').each(function(){
            if ($(this).prop('href') === window.location.href) {
                $(this).addClass('active');
            }
        });

    });
});