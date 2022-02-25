"use strict"
var audio = new Audio('img/underwaterimgitems/UW_background_sound.mp3');
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
        const bg = document.querySelector('.img-parallax_bg');
        const bag1 = document.querySelector('.img-parallax_bag1');
        const bag2 = document.querySelector('.img-parallax_bag2');
        const bag3 = document.querySelector('.img-parallax_bag3');
        const garbage = document.querySelector('.img-parallax_garbage');
        const bag4 = document.querySelector('.img-parallax_bag4');
        const bag5 = document.querySelector('.img-parallax_bag5');
        const bag6 = document.querySelector('.img-parallax_bag6');

        const fSky=0;
        const fbg=50;
        const fbag1=10;
        const fbag2=6;
        const fbag3=30;
        const fGarbage=20;
        const fbag4=10;
        const fbag5=4;
        const fbag6=1;
        
        const speed=0.05;

        let positionX=0, positionY=0;
        let coordXprocent=0, coordYprocent=0;

        function setMouseParallax() {
            const distX=coordXprocent-positionX;
            const distY=coordYprocent-positionY;

            positionX = positionX +(distX * speed);
            positionY = positionY +(distY * speed);
            sky.style.cssText=`transform: translate(${positionX/fSky}%, ${positionY/fSky}%);`
            bg.style.cssText=`transform: translate(${positionX/fbg}%, ${positionY/fbg}%);`
            bag1.style.cssText=`transform: translate(${positionX/fbag1}%, ${positionY/fbag1}%);`
            bag2.style.cssText=`transform: translate(${positionX/fbag2}%, ${positionY/fbag2}%);`
            bag3.style.cssText=`transform: translate(${positionX/fbag3}%, ${positionY/fbag3}%);`
            garbage.style.cssText=`transform: translate(${positionX/fGarbage}%, ${positionY/fGarbage}%);`
            bag4.style.cssText=`transform: translate(${positionX/fbag4}%, ${positionY/fbag4}%);`
            bag5.style.cssText=`transform: translate(${positionX/fbag5}%, ${positionY/fbag5}%);`
            bag6.style.cssText=`transform: translate(${positionX/fbag6}%, ${positionY/fbag6}%);`
            
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
            bg.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/1.3}%);`;
            bag1.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/2}%);`;
            bag2.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/2}%);`;
            bag3.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/2}%);`;
            garbage.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/1.3}%);`;
            bag4.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/2}%);`;
            bag5.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/1.5}%);`;
            bag6.parentElement.style.cssText=`transform: translate(0%, -${scrollTopProcent/1.1}%);`;
        }
        /*
        */
    }
}