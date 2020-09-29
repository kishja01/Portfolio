//This code was created and edited by Jackson Kish using VSCodes 


//Function controls navigation visibility based on users scroll value
window.onscroll = function() {scrolling()};
function scrolling(){
    
    //displays sideNav if user scrolls passed 0 
    if (document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50) {
           
           document.getElementById("mainNav").style.display = "none"
           
            document.getElementById("navContainer").style.display = "none"

           document.getElementById("sideNav").style.display ="flex"
        } 
    //displays mainNav and navContainer if user returns to 0
    else {
            document.getElementById("mainNav").style.display = "flex"
           
            document.getElementById("navContainer").style.display = "flex"

           document.getElementById("sideNav").style.display ="none"           
            }
    //removes sideNav if user scrolls passed project page
    if(document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1250 ) {
        document.getElementById("sideNav").style.display = "none"
    }
}
















