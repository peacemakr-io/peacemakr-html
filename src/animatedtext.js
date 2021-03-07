//document.addEventListener('DOMContentLoaded',function(event){
//  // array with texts to type in typewriter
//  var dataText = [ "so easy, that you can focus on your business value-adds", "so strong, that you'll convert security skeptics into your strongest advocates", "so consistent, that your architechets will love it", "so strong, that it will actually protect your data"];
//  
//  // type one text in the typwriter
//  // keeps calling itself until the text is finished
//  function typeWriter(text, i, fnCallback) {
//    // chekc if text isn't finished yet
//    if (i < (text.length)) {
//      // add next character to h1
//     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
//
//      // wait for a while and call this function again for next character
//      setTimeout(function() {
//        typeWriter(text, i + 1, fnCallback)
//      }, 100);
//    }
//    // text finished, call callback if there is a callback function
//    else if (typeof fnCallback == 'function') {
//      // call callback after timeout
//      setTimeout(fnCallback, 700);
//    }
//  }
//  // start a typewriter animation for a text in the dataText array
//   function StartTextAnimation(i) {
//     if (typeof dataText[i] == 'undefined'){
//        setTimeout(function() {
//          StartTextAnimation(0);
//        }, 20000);
//     }
//     // check if dataText[i] exists
//    if (i < dataText[i].length) {
//      // text exists! start typewriter animation
//     typeWriter(dataText[i], 0, function(){
//       // after callback (and whole text has been animated), start next text
//       StartTextAnimation(i + 1);
//     });
//    }
//  }
//  // start the text animation
//  StartTextAnimation(0);
//});


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 50 - Math.random() * 50;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };