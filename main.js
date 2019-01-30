if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {




   }else
   {
    window.addEventListener("scroll", function() {showFunction()});

    function showFunction() {
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            document.getElementById("fader2").style.display = "block";
        } else {
            document.getElementById("fader2").style.display = "none";
        } 
    }
}
