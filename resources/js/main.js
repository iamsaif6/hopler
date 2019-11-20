$(document).ready(function () {
    
    $(".js--services").waypoint(function(direction){
        if (direction == "down") {
            $("nav").addClass("sticky");
            
            } else {
            $("nav").removeClass("sticky");
            }
        
        
    });
    
    var mix = mixitup('.container');
    
    

});

var spy = new Gumshoe('#my-awesome-nav a', {
	nested: true,
	nestedClass: 'active-parent'
});

function openNav() {
     document.getElementById("myNav").style.width="100%";
 }


function closeNav() {
     document.getElementById("myNav").style.width="0%";
 }

