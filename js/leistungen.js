$(function(){
    $(document).ready(function () {

        //ACCORDION: rotate angle-down
        $(".panel-title").click(function () {
            $(this).children().toggleClass("down");
        })


        for(let i=0; i<10; i++){
            $('.panel-' + i.toString()).css('animation','transitionIn ' + (i*0.25).toString() + 's ease-in ')
        }

    });
});