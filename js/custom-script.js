// jQuery


// mobile menu
function mobileMenu() {
    const openBtn = document.querySelector('.open-menu');

    openBtn.addEventListener('click', function(event) {
        event.preventDefault();
        openBtn.classList.toggle('open-btn');
        if ( document.body.classList.contains('menu-opened') ) {
            document.body.classList.remove('menu-opened');
        } else {
            document.body.classList.add('menu-opened');
        }
    });
};


// Btn class mouse hover out
function buttonEnterAnimation() {
    let btnCircle = document.querySelectorAll('.btn-circle');
    for (let i = 0; i < btnCircle.length; i++) {

        btnCircle[i].addEventListener( 'mouseenter', function() {
            btnCircle[i].classList.add('btn-circle-anim-first');
            if(  btnCircle[i].classList.contains("btn-circle-anim-back") ) {
                btnCircle[i].classList.remove("btn-circle-anim-back");
            }
        });
    }
}
function buttonLeaveAnimation() {
    let btnCircle = document.querySelectorAll('.btn-circle');
    for (let i = 0; i < btnCircle.length; i++) {
        btnCircle[i].addEventListener( 'mouseleave', function() {
            setTimeout(function () {
                btnCircle[i].classList.add('btn-circle-anim-back');
            }, 300);

            if( btnCircle[i].classList.contains("btn-circle-anim-first") ) {
                setTimeout(function () {
                    btnCircle[i].classList.remove("btn-circle-anim-first");
                }, 300);
                // btnCircle[i].classList.remove("btn-circle-anim-first");
            }
        });
    }
}

// Animation
// setTimeout($(".img-giff").addClass('imagesmall'), 5000);
setTimeout(function() {
    $(".img-giff").addClass('imagegifshow');
}, 500);
setTimeout(function() {
    $(".img-giff").addClass('imagesmall');
}, 3000);
// setTimeout(function() {
//     $(".img-giff").addClass('imagesmall removeAnimation').appendTo('.hero-content');
// }, 3000);
// setTimeout(function() {
//     $("#imgGiff1").addClass("removeAnimation").appendTo('.hero-content');
// }, 3000);




// $('.btn-circle').mouseenter(function(){
//     $(".btn-circle").addClass("btn-circle-anim-first");
//     if( $(".btn-circle").hasClass("btn-circle-anim-back") ) {
//         $(".btn-circle").removeClass("btn-circle-anim-back");
//     }
// });
// $('.btn-circle').mouseleave(function(){
//     $(".btn-circle").addClass("btn-circle-anim-back");
//     if( $(".btn-circle").hasClass("btn-circle-anim-first") ) {
//         $(".btn-circle").removeClass("btn-circle-anim-first");
//     }
// });

(function($){
    'use strict';

    $(document).ready(function() {
        mobileMenu();
        buttonEnterAnimation();
        buttonLeaveAnimation();


    }); // ready

    $(window).on('resize', function() {
    }); // resize

    $(window).on('load', function() {
    }); // load

    // functions
})(this.jQuery);