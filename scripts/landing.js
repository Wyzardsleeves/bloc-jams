var animatePoints = function(){
    var revealPoint = function(){
         $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
    };
    $.each($('.point'), revealPoint);
};
     
    
$(window).load(function(){
    if ($(window).height() > 950) {
        animatePoints();
    }
    /* DOM version
    if(window.innerHeight > 950){
        animatePoints(pointsArray);
    }
    */
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
    /* DOM version
    window.addEventListener("scroll", function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance){
             animatePoints(pointsArray);
        }
    });
    */
    $(window).scroll(function(event){
        if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
        }
    });
});