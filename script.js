


$('#why-astro-btn').click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(90deg)");
        $('#why-astrology').css('height', 'auto')
    } else {
        $(this).css("transform","" );
        // $('#why-astrology').css('height', '69vh')

    }
    $('.collapse').slideToggle();

})

$("img").attr("loading","lazy");

let consultMethodsArray = ['Astrology', 'Kundli Matching', 'Numerology', 'Tarot card reading', 'Palmistry',
                             'Lal Kitab', 'Counsellor', 'Ayurveda', 'Gemology', 'Meditation' ]

consultMethodsArray.forEach( method => {
        let newMethod = `<div class="method-card">
                                <h3>${method}</h3>
                                <p>Verified and experienced astrologers</p>
                        </div>`

        $('#methods-container').append(newMethod);
})

let scenariosArray = ['Love', 'Marrige', 'Career', 'Life', 'Health'];

scenariosArray.forEach( scenario => {
    let newScenario = ` <div class="method-card">
                            <h3>${scenario}</h3>
                            <p>Verified and experienced astrologers</p>
                        </div>`

    $('.scenarios').append(newScenario)
})

let imagePath = './images/method'
$('.method-card').each(function(i){
    let j = i%6;
    j++;
    $(this).css('background-image', `url('${imagePath}${j.toString()}.png')`);
    $(this).css('background-repeat', `no-repeat`);
    $(this).css('background-size', `cover`);


})
$('#btn-methods').addClass('activeBtn')
$('#btn-scenario').click(function() {
    $('#methods-container').css('display','none');
  

    $('.scenarios').addClass('sc');
    $('#btn-methods').removeClass('activeBtn')
    $(this).addClass('activeBtn')

})
$('#btn-methods').click(function() {
    $('#methods-container').css('display','flex');
    $('.scenarios').removeClass('sc');
    $('.scenarios').addClass('scenarios');
    $('#btn-scenario').removeClass('activeBtn')
    $(this).addClass('activeBtn')

})

// function slickify(){
//     $('#news').not('.slick-initialized').slick({
//         infinite: true,
//         slidesToShow: 6,
//         slidesToScroll: 5,
//         dots:true,
//         arrows:true,
//         prevArrow:'<button class="pre" ><img src="./images/left.svg" alt=""></button>',
//         nextArrow: '<button class="nex"><img src="./images/right.svg" alt=""></button>',
//         // responsive: [
//         //    { breakpoint: 1200,
//         //     settings: {
//         //         slidesToShow: 2,
//         //         slidesToScroll: 2,
//         //     }}
//         // ]
//         // speed: 700,
        
        
//     });
// }

// slickify();


let createSlick = () => {
    $('#methods-container').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        dots:true,
        arrows:true,
        prevArrow:'<button class="prev" ><img src="./images/left.svg" alt=""></button>',
        nextArrow: '<button class="next"><img src="./images/right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    // adaptiveHeight: true,
                },
                },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                // adaptiveHeight: true,
            },
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            },
        ],
    // centerMode: true,
  });
}

createSlick();
// slickify()
// if($(window).innerWidth() <= 1200){
//     
// }

  $(window).on( 'resize orientationchange', ()=>{
      createSlick();
    //   if($(window).innerWidth() <= 1200){
    //       slickify()
    //   }
      if($(window).innerWidth() <= 800){
        $('#mobile-banner-id').attr('src','./images/bannerMobile.svg')
       }else{
        $('#mobile-banner-id').attr('src','./images/banner.png')
       }
  });

//   let slickPrev =   $('.slick-prev');
//   let slickNext =  $('.slick-next');
  
//   slickPrev.html('<img id="theImg2" src="./images/left.svg" />')
//   slickNext.html('<img id="theImg" src="./images/right.svg" />')

let imageNames = ['Tedx', 'dailyhunt', 'bwDisrupt', 'yourstory'];



for(let i = 0; i<12; i++){

    let count  = i%4;
    let newCard = `<div class="news-card">
                        <img src="./images/${imageNames[count]}.svg" alt="">
                        <p id="news-date">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4093 0.245605H10.8389C10.8358 0.245605 10.8327 0.247168 10.8296 0.247168C10.8264 0.247168 10.8233 0.245605 10.8202 0.245605H7.24206C6.98738 0.245605 6.77956 0.451856 6.77956 0.708106C6.77956 0.964356 6.98581 1.17061 7.24206 1.17061H10.3608L10.3749 4.53779C10.3749 6.07373 9.34206 7.37217 7.93581 7.77842C7.63894 7.86436 7.32644 7.91123 7.00144 7.91123C5.14206 7.91123 3.628 6.39717 3.628 4.53623L3.61394 1.17217H4.37175C4.62644 1.17217 4.83425 0.965918 4.83425 0.709668C4.83425 0.453418 4.628 0.247168 4.37175 0.247168H0.576437C0.32175 0.247168 0.113937 0.453418 0.113937 0.709668V1.35186C0.113937 2.38779 0.63425 3.34092 1.50612 3.90186C1.58425 3.95186 1.67019 3.97529 1.75612 3.97529C1.90769 3.97529 2.05612 3.90029 2.14519 3.76436C2.28269 3.55029 2.22175 3.26436 2.00769 3.12529C1.40144 2.73467 1.03894 2.07217 1.03894 1.35186V1.17061H2.68737L2.70144 4.53779C2.70144 6.51748 4.04831 8.18935 5.87331 8.68467V11.0487C5.68894 11.0753 5.50612 11.1065 5.328 11.1472C5.07956 11.2034 4.92331 11.4519 4.97956 11.7003C5.03581 11.9487 5.28425 12.105 5.53269 12.0487C5.99519 11.944 6.48581 11.8909 6.9905 11.8909C7.40144 11.8909 7.78581 11.9269 8.14363 11.9909C9.3655 12.205 10.2499 12.744 10.5671 13.3175H3.40925C3.56862 13.0206 3.87487 12.7378 4.30144 12.5034C4.52487 12.38 4.60612 12.0987 4.48269 11.8753C4.35925 11.6519 4.078 11.5706 3.85456 11.694C2.8905 12.2253 2.35925 12.9659 2.35925 13.78C2.35925 14.0347 2.5655 14.2425 2.82175 14.2425H11.1577C11.4124 14.2425 11.6202 14.0362 11.6202 13.78C11.6202 12.4378 10.1467 11.344 8.10612 11.0472V8.68779C9.94206 8.19717 11.2968 6.52217 11.2968 4.53467L11.2827 1.17061H12.9483V1.35186C12.9483 2.07217 12.5858 2.73467 11.9796 3.12529C11.7655 3.26279 11.703 3.54873 11.8421 3.76436C11.9311 3.90186 12.0796 3.97686 12.2311 3.97686C12.3171 3.97686 12.403 3.95342 12.4811 3.90342C13.353 3.34248 13.8733 2.38779 13.8733 1.35342V0.708106C13.8718 0.453418 13.6639 0.245605 13.4093 0.245605ZM7.18425 10.9675C7.12019 10.9659 7.05613 10.9644 6.99206 10.9644C6.96863 10.9644 6.94519 10.9659 6.92019 10.9659C6.87956 10.9659 6.83894 10.9675 6.79831 10.969V8.83311H7.18425V10.9675Z" fill="#333333"/>
                            </svg>
                            Jan 7, 2021</p>
                    </div>`
    count++;
    
    $('#news').append(newCard);

}


    // $('#process-card-container').flickity({
    //     // options
    //     cellalign: 'right',
    //     contain: true,
    //     wrapAround: true,
    //     imagesLoaded: true
    //     groupCells: '20%',
    //     selectedAttraction: 0.03,
    //     friction: 0.15
    //   });
 
