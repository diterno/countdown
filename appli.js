// Variables :

var seconde = document.getElementById('seconds');
var minute = document.getElementById('minutes');
var s = 60;
var m = 59;
var tps;
var song = document.getElementById('alarm');


// fonction Compte à rebours :

var countDown = function () {

    clearTimeout(tps);

    tps = setTimeout(countDown, 1000);

    if (s > 0) {
        seconde.innerHTML = (s = s - 1);
                }
        minute.innerHTML = m;

    if  ( s == 0 ) {



    if ( m > 0)   {
        minute.innerHTML = (m = m - 1);
        s = 59;
                  }
        seconde.innerHTML = s ;
                  }
     if (s == 0 && m == 0) {

         song.play();
     }
};



countDown();

// event bouttons play :

document.getElementById('start-button').addEventListener("click",countDown);


// event bouttons reset :

document.getElementById('reset-button').addEventListener("click",
    function () {
        s = 60;
        m = 59;
    }
    );


// Boutton stop :


var stopCountUp = function() {

    clearTimeout(tps);

};

var stopButton = document.getElementById("stop-button");


stopButton.addEventListener("click", stopCountUp);



// input :


document.getElementById('input_submit').addEventListener("click",
    function () {


        var input_m = document.getElementById('input_minute').value;
        var input_s = document.getElementById('input_seconde').value;

            s = input_s;
            m = input_m;

    });


