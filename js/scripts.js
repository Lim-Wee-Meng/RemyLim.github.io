/*!
* Start Bootstrap - Freelancer v7.0.0 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});

function closeModal7(){
    document.getElementById("vid7").src = document.getElementById("vid7").src;
    window.location.reload(); 
}

function closeModal8(){
    document.getElementById("vid8").src =document.getElementById("vid8").src;
    window.location.reload(); 
}

function closeModal9(){
    document.getElementById("vid9").src = document.getElementById("vid9").src;
    window.location.reload(); 
}

function closeFR(){
    document.getElementById("vidFR").src = document.getElementById("vidFR").src;
    window.location.reload(); 
}

function closeAI(){
    document.getElementById("vidAI").src = document.getElementById("vidAI").src;
    window.location.reload(); 
}
function closeVD(){
    document.getElementById("vidVD").src = document.getElementById("vidVD").src;
    window.location.reload(); 
}


$("#closeSimple").click(function() {
    document.getElementById("modalImg").src = document.getElementById("modalImg").src;
    window.location.reload();    
});
