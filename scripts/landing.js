var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point){
        point.style.opacity = 1;
        point.style.transform = "scaleX(1) translateY(0)";
        point.style.msTransform = "scale(1) translateY(0)";
        point.style.WebkitTransform = "scale(1) translateY(0)";
    };

 var animatePoints = function(points) {
     forEach(points, revealPoint);
     
     
};
    /*
    if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     };
     */
window.onload = function(){
    if(window.innerHeight > 950){
        animatePoints(pointsArray);
    }
    
    /*
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    */
    
    window.addEventListener('scroll', function(event){
        
        /*
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
        
        */

        if(pointsArray[0].getBoundingClientRect().top <= 500){
            animatePoints(pointsArray);
        }
    });
}

