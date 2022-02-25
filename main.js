"use strict"
var audio = new Audio('img/paralax_home/LP_background_sound.mp3');
audio.loop = true;
audio.volume = 0.2;
function togglePlay() {
    return audio.paused ? audio.play() : audio.pause();
  };
window.onload = function(){
    const parallax = document.querySelector('.parallax');
    
    if(parallax){
        const content = document.querySelector('.parallax_container');
        const sky = document.querySelector('.img-parallax_sky');
        const zone4 = document.querySelector('.img-parallax_zone4');
        const zone3 = document.querySelector('.img-parallax_zone3');
        const garbage = document.querySelector('.img-parallax_garbage');
        const zone1 = document.querySelector('.img-parallax_zone1');
        const seagulls = document.querySelector('.img-parallax_seagulls');

        const fSky=0;
        const fzone4=50;
        const fzone3=30;
        const fGarbage=20;
        const fzone1=10;
        const fSegulls=8;
        
        const speed=0.08;

        let positionX=0, positionY=0;
        let coordXprocent=0, coordYprocent=0;

        function setMouseParallax() {
            const distX=coordXprocent-positionX;
            const distY=coordYprocent-positionY;

            positionX = positionX +(distX * speed);
            positionY = positionY +(distY * speed);

            sky.style.cssText=`transform: translate(${positionX/fSky}%, ${positionY/fSky}%);`
            zone4.style.cssText=`transform: translate(${positionX/fzone4}%, ${positionY/fzone4}%);`
            zone3.style.cssText=`transform: translate(${positionX/fzone3}%, ${positionY/fzone3}%);`
            zone1.style.cssText=`transform: translate(${positionX/fzone1}%, ${positionY/fzone1}%);`
            garbage.style.cssText=`transform: translate(${positionX/fGarbage}%, ${positionY/fGarbage}%);`
            seagulls.style.cssText=`transform: translate(${positionX/fSegulls}%, ${positionY/fSegulls}%);`
            
            requestAnimationFrame(setMouseParallax);
        }
        setMouseParallax();

        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidth=parallax.offsetWidth;
            const parallaxHeight=parallax.offsetHeight;

            const coordX=e.pageX - parallaxWidth / 2;
            const coordY=e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;

        });
        
        let thresholdsSets =[];
        for(let i =0;i<=1.0;i+=0.005){
            thresholdsSets.push(i);
        }
        const callback = function(entries, observer) {
            const scrollTopProcent = window.pageYOffset/parallax.offsetHeight*100;
            setParallaxItem(scrollTopProcent);
        };
        const observer = new IntersectionObserver(callback, {
            threshold: thresholdsSets
        });
        
        observer.observe(document.querySelector('.other_cont'));
        
        function setParallaxItem(scrollTopProcent) {
            zone4.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/4}%);`;
            zone3.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/2}%);`;
            zone1.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/1.2}%);`;
            garbage.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/3}%);`;
            seagulls.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/1}%);`;
        }
        /*
        */
    }
}