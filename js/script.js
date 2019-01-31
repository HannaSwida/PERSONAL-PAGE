
//PRELOADER
$(window).on('load', function() {
    $('#status').delay(200).fadeOut();
    $('#preloader').delay(350).fadeOut();
});
$('a[href*="#about"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

//PROGRESS BAR
$(function() {
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                width:$(this).attr("aria-valuenow") + '%'
            },1000);
        });
        this.destroy();
    },{
        offset:'bottom-in-view'
    });

});
const el = document.querySelector( '.counter' )

// Start counting, do this on DOM ready or with Waypoints.

$(function() {
    $("#stats").waypoint(function(){
        $('#counter-1').animateNumber({ number: 23 },3500);
        $('#counter-2').animateNumber({ number: 3 },3500);
        $('#counter-3').animateNumber({ number: 10},3500);
        $('#counter-4').animateNumber({ number: 9001},3500);
        this.destroy();
    },{
        offset:'bottom-in-view'
    });

});

