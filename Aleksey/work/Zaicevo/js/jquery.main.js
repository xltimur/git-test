/* script by ProVerstka */
$(document).ready(function(){
    /* инициализация функций */
    /* описание функций */
    setTimeout(function(){
        initSly();
    }, 100);
    mobmenu();
    mobmenu2();
    initMap();
    maskInput();
    $(window).resize(function(){
        initSly();
    })

    $('.video-complex .video video').attr('src',$('.video-complex .video video').attr('data-src'));


    function initSly(){
        var $frame1 = $('.gallery-cover');
        $frame1.each(function(){
            var $wrap1 = $(this).closest('.gallery');
            $(this).sly({
                horizontal: 1,
                itemNav: 'forceCentered',
                smart: 1,
                startAt: 3,
                activateMiddle: 1,
                activateOn: 'click',
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                scrollBy:0,
                speed: 500,
                easing: 'swing',
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,
                elasticBounds: 1,
                prevPage: $wrap1.find('.prev'),
                nextPage: $wrap1.find('.next')
            });
            var _this = $(this);
            $(this).sly('on', 'active',function(){
                var itemIndex = _this.find('li.active').index();
                _this.closest('.gallery').find('.switcher-list li').eq(itemIndex).click();
            });
            $frame1.sly('reload');
        });
        var $frame2 = $('.switcher-cover');
        $frame2.each(function(){
            var $wrap2 = $(this).closest('.switcher');
            $(this).sly({
                horizontal: 1,
                itemNav: 'forceCentered',
                smart: 1,
                startAt: 3,
                activateMiddle: 1,
                activateOn: 'click',
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                scrollBy:0,
                speed: 500,
                elasticBounds: 1,
                easing: 'swing',
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,
                prevPage: $wrap2.find('.prev'),
                nextPage: $wrap2.find('.next')
            });
            $(this).find('li').unbind( "click" ).click(function(){
                var index = $(this).index();
                $(this).closest('.gallery').find('.gallery-holder li').unbind( "click" ).eq(index).click();
            });
            $frame2.sly('reload');
        });
    };




    $(".list-map li a").click(function(e) {
        var _room = $(this).attr('data-room')
        $(".list-map li").removeClass('active');
        $(".map-holder li").removeClass('active-map');
        $(".map-holder li").each(function(){
            if($(this).hasClass(_room)){
                $(this).addClass('active-map');
            };
        });
        $(this).closest('li').addClass('active')
        return false;
    });




    $('img[usemap]').rwdImageMaps();

    $('.map-item').each(function(){
        var _this = $(this);
        $('area',_this).mouseenter(function(){
            var _id = $(this).attr('alt');
            $('#'+_id).addClass('activestate');
            $('.'+_id).addClass('activestate');
            $('.visual-block-frame').addClass('hover')
        }).mouseleave(function(){
            $('.visual-block-frame').removeClass('hover');
            $('area',_this).closest('.visual-block-frame').find('.map-holder li').removeClass('activestate');
            $('area',_this).closest('.visual-block-frame').find('.sector-list li').removeClass('activestate');
        });

    });


    $('.nav a').click(function(e){
        var _href = $(this).attr('href');
        $('body,html').animate({scrollTop:$(_href).offset().top},1000, function() {});
        e.preventDefault();
    });



});
/* подключение плагинов */


function maskInput(){
    $(".phone-input").mask("+7 (999) 999-99-99");
}


function mobmenu(){
    var opener = $('.open-menu');
    var menu = $('#header .nav ul');
    opener.on('click', function(e){
        menu.slideToggle();
        $(document).click(function(event) {
            if ($(event.target).closest("#header .nav ul ").length || $(event.target).closest("#nav ul").length) return;
            $("#header .nav ul ").removeAttr('style');
            event.stopPropagation();
            $(document).unbind('click')
        });
        $(this).toggleClass('active');
        return false;
    });
};

function mobmenu2(){
    var opener = $('.open-menu-footer');
    var menu = $('#footer .nav ul');
    opener.on('click', function(e){
        menu.slideToggle();
        $(document).click(function(event) {
            if ($(event.target).closest("#footer .nav ul ").length || $(event.target).closest("#nav ul").length) return;
            $("#footer .nav ul ").removeAttr('style');
            event.stopPropagation();
            $(document).unbind('click')
        });
        $(this).toggleClass('active');
        return false;
    });
};

function initMap(){
    if(!$('#map_yandex').size())return;
    ymaps.ready(init);
    function init () {
        var myMap = new ymaps.Map("map_yandex", {
            center: [55.12030171, 36.57747778],
            zoom: 17
        })

        myPlacemark1 = new ymaps.Placemark([55.12063707, 36.57964710], {}, {
            iconImageHref: 'images/bg-4.png',
            iconImageSize: [179, 37],
            iconImageOffset: [-47, -35]
        });
        myPlacemark2 = new ymaps.Placemark([55.12040342, 36.57510880], {}, {
            iconImageHref: 'images/bg-5.png',
            iconImageSize: [149, 37],
            iconImageOffset: [6, -33]
        });
        myPlacemark3 = new ymaps.Placemark([55.11988691, 36.57578472], {}, {
            iconImageHref: 'images/bg-6.png',
            iconImageSize: [194, 37],
            iconImageOffset: [-16, -7]
        });
        myPlacemark4 = new ymaps.Placemark([55.11910599, 36.57370333], {}, {
            iconImageHref: 'images/bg-7.png',
            iconImageSize: [179, 37],
            iconImageOffset: [-32, 5]
        });
        myPlacemark5 = new ymaps.Placemark([55.11888462, 36.57881025], {}, {
            iconImageHref: 'images/bg-8.png',
            iconImageSize: [237, 37],
            iconImageOffset: [-119, -39]
        });
        myPlacemark6 = new ymaps.Placemark([55.11881083, 36.58122424], {}, {
            iconImageHref: 'images/bg-9.png',
            iconImageSize: [158, 37],
            iconImageOffset: [-76, -51]
        });
        myPlacemark7 = new ymaps.Placemark([55.11833735, 36.57816652], {}, {
            iconImageHref: 'images/bg-10.png',
            iconImageSize: [149, 37],
            iconImageOffset: [-10, -78]
        });
        myPlacemark8 = new ymaps.Placemark([55.11837424, 36.57438997], {}, {
            iconImageHref: 'images/bg-11.png',
            iconImageSize: [141, 37],
            iconImageOffset: [-94, -24]
        });
        myPlacemark9 = new ymaps.Placemark([55.11828815, 36.57609586], {}, {
            iconImageHref: 'images/bg-12.png',
            iconImageSize: [167, 37],
            iconImageOffset: [-4, -28]
        });
        myPlacemark10 = new ymaps.Placemark([55.11994840, 36.57099966], {}, {
            iconImageHref: 'images/bg-13.png',
            iconImageSize: [229, 50],
            iconImageOffset: [-37, -32]
        });

        myMap.geoObjects.add(myPlacemark1);
        myMap.geoObjects.add(myPlacemark2);
        myMap.geoObjects.add(myPlacemark3);
        myMap.geoObjects.add(myPlacemark4);
        myMap.geoObjects.add(myPlacemark5);
        myMap.geoObjects.add(myPlacemark6);
        myMap.geoObjects.add(myPlacemark7);
        myMap.geoObjects.add(myPlacemark8);
        myMap.geoObjects.add(myPlacemark9);
        myMap.geoObjects.add(myPlacemark10);
       /* myMap.controls.add('zoomControl', {left: '10px', top: '50px'});
        myMap.controls.add('mapTools', {left: '10px', top: '10px'});*/
    }
}