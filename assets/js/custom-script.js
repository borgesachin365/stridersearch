//scroll to top smooth scroll 
$(document).ready(function(){
	$('.js-anchor-link').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	    });
	});
});

//update year automatic
const yearspan = new Date().getFullYear();
const currentyear = document.getElementById("currentyear").innerText = yearspan;