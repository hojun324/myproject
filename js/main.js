

var currentIndex = 0,
    sliderContainer = document.getElementsByClassName('bener'),
    slider = document.getElementsByClassName('slideimg'),
    sliderConta = slider.length,
    timer,
    imgbHTML = '',
    imgb = document.querySelector('.imgb ul'),
    // imgBtn = document.querySelectorAll('.imgb li'),
    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next');




for(var a = 0; a < sliderConta; a++){
    imgbHTML += '<li data-idx="'+a+'">'+(a+1)+'</li>';
    imgb.innerHTML = imgbHTML;
}
var imgBtn = document.querySelectorAll('.imgb li');



function goToslide(idx){
    sliderContainer[0].style.transform = 'translate(' + idx * -100 +'vw'+')';
    currentIndex = idx;

    for(var y = 0; y < imgBtn.length; y++){
        imgBtn[y].classList.remove('active');
    }
    imgBtn[idx].classList.add('active');

    


}
goToslide(0);



navPrev.addEventListener('click',function(ev){
    ev.preventDefault();
    if(currentIndex != 0){
        goToslide(currentIndex -1);  
    }else{
        goToslide(sliderConta-1);  
    }
    
});


navNext.addEventListener('click',function(ev){
    ev.preventDefault();
    if(currentIndex < sliderConta -1){
        goToslide(currentIndex +1);  
    }else{
        goToslide(0);  
    }
    // goToslide(currentIndex +1);
    
 });

// goToslide(0);



function startAutoSlide() {

     timer = setInterval(function(){
        var nextIdx = (currentIndex + 1) % sliderConta; 
        goToslide(nextIdx);
    },5000);

}

startAutoSlide();

// function stopAutoslide(){
//     clearInterval(timer);
// }

sliderContainer[0].addEventListener('mouseenter',function(){
    clearInterval(timer);
});
navNext.addEventListener('mouseenter',function(){
    clearInterval(timer);
});

navPrev.addEventListener('mouseenter',function(){
    clearInterval(timer);
});

navNext.addEventListener('mouseleave',function(){
    startAutoSlide();
});

navPrev.addEventListener('mouseleave',function(){
    startAutoSlide();
});
sliderContainer[0].addEventListener('mouseleave',function(){
    startAutoSlide();
});


//imgb
for(var x = 0; x < imgBtn.length; x++){
    imgBtn[x].addEventListener('click',function(event){
        

         // var imgNum = event.target.getAttribute('data-idx');
        var imgNum = event.target.innerText -1;
        goToslide(imgNum);
    });
}

/////////////////////////////////////////////////////////////////////////////////
document.addEventListener('click',lightbox);

function lightbox(event){   
    var elem = event.target,
        elemId = elem.getAttribute('id'),
        lightBoximg = document.getElementById('lightbox-image'),
        lightBox = document.getElementById('lightbox-overlay'),
        newImg = new Image();

         
        if(elem.hasAttribute('data-lightbox')){
            event.preventDefault();
            newImg.onload = function(){
                lightBoximg.src = this.src;
            }

            // lightBoximg.src = '';
            newImg.src = elem.getAttribute('data-lightbox');
            lightBox.classList.add('visible');
        }

        if(elemId == 'lightbox-overlay' || elemId == 'lightbox-image'){
            lightBox.classList.remove('visible');
        }
}





const cartmv = document.getElementsByClassName('side-cart')[0];
document.getElementById('cart').addEventListener('click', function(ev) {
    cartmv.classList.toggle("cartmove");
    ev.preventDefault();
});



$('#line-wrapper').click(function(){
    $('.line').removeClass('init');
    $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
    $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
    $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse');
  });


document.getElementById("line-wrapper").addEventListener("click",function(){
        $('.hideba').fadeToggle('slow');  
        
});

document.getElementById("search").addEventListener("click",function(ev){  
        $('.search-bar').fadeToggle('slow');  
        ev.preventDefault();
        
});

// $( document ).ready( function() {
//     $('#search').click(function(){
//         $('.search-bar').fadeIn('slow');
//         // $('.search-bar').fadeOut('slow');
//       });
//   } );







var btt= document.getElementById("back-to-top"),
docElem = document.documentElement, //문서자체 짚어넣기
offset,
scrollPos,
docHeight;

docHeight = Math.max(docElem.scrollHeight,docElem.offsetHeight);//둘다 문서의 높이값을 가져오는데 둘중에 높은것가져오기 

if(docHeight !=0){
    offset = docHeight/4;
}

// 문서 높이 계산하기
window.addEventListener('scroll',function(){
    scrollPos = docElem.scrollTop;
    btt.className = (scrollPos > offset) ? 'visible' : '';  //스크롤양이 > offset(문서의 1/4 높이) 보다 높으면 visible이란 클래스로 바꾸고 그게아니면 빈값 

    // if(scrollPos > offset){
    //     btt.className = 'visible';
    // }else{
    //     btt.className = '';
    // } 위문장을 풀어쓰면
    
});



btt.addEventListener("click",function(ev){
ev.preventDefault();
scrollToTop();
});

function scrollToTop(){
var scrollInterval = setInterval(function(){

    if(scrollPos != 0){
        window.scrollBy(0,-55);
    }else{
        clearInterval(scrollInterval);
    }

},5);
}
