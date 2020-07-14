//Animation for surface class
window.addEventListener("load", function () {
    var shapeSurface = document.querySelector('.surface');
    var Frames = [
        { transform: "translateX(0px)" },
        { transform: "translateX(-2950px)" },
    ];
    var Timer = {
        duration: 6000,
        iterations: Infinity,
    };
    var shapeAnimateSurface = shapeSurface.animate(Frames, Timer);
    document.querySelector(".play").addEventListener("click", function () {
        shapeAnimateSurface.play();
    });
    document.querySelector(".pause").addEventListener("click", function () {
        shapeAnimateSurface.pause();
    });
    document.querySelector(".reverse").addEventListener("click", function () {
        shapeAnimateSurface.reverse();
    });
    document.querySelector(".updatePlaybackRate").addEventListener("click", function () {
        shapeAnimateSurface.updatePlaybackRate(shapeAnimateSurface.playbackRate * 1.2);
    });
});
//Animantion for car class

var shapeCar = document.querySelector('.car');
var FrameCar = [
    { transform: 'translateY(-1px)' },
    { transform: 'translateY(2px)' },
    { transform: 'translateY(-1px)' },

];

var TimerCar = {
    duration: 1000,
    iterations: Infinity
};

var shapeAnimateCar = shapeCar.animate(FrameCar, TimerCar);

// //For light 
// document.querySelectorAll('.surface .car').addEventListener('keypress', function (e) {
//     console.log(e.which);
// });