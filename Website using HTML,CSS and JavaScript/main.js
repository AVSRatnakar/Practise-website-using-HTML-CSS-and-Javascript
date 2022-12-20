let slideCount = 1;
 
function nextSlide() 
 {
    slideCount++;
    movetoSlide(slideCount);
 }

 function prevSlide()
 {
    slideCount--;
    movetoSlide(slideCount);
 }

 function movetoSlide(slideNum)
 {
    let marg = slideNum*100;
    document.querySelector('.slider').style.transition="0.75s"
    document.querySelector('.slider').style.marginLeft=-marg+"%";

    if(slideNum==0) {
        setTimeout(function(){
            slideCount=5;

            document.querySelector('.slider').style.transition="0s"
            document.querySelector('.slider').style.marginLeft="-400%";
        },750)
    }

    if(slideNum==6) {
        setTimeout(function(){
            slideCount=1;

            document.querySelector('.slider').style.transition="0s"
            document.querySelector('.slider').style.marginLeft="-100%";
        },750)
    }
 }


 let autoslider =  setInterval(nextSlide,5000);

 $(".theme-switch").on("click", () => {
    $("body").toggleClass("dark-theme");
});
