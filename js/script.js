var playing;

$(document).ready(function() {
    $(".language").on('click', function() {
        if(playing) {
            $("#country")[0].pause();
            playing = !playing;
        } else {
            $("#country")[0].play();
            playing = !playing;
        }
    });
})