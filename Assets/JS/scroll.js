 jQuery('body').css('overflow','hidden'); 
 
 AOS.init();

 document.getElementById('top').scrollIntoView({
});

 var links = document.getElementsByTagName('a');
 for (var i=0, len=links.length; i < len; i ++) {
   links[i].target = '_blank';
   links[i].rel = "noopener noreferrer";
 }

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });    
    });
});

window.onscroll = function() {scrollFunction()};
$(window).scroll( function() {
  if($(this).scrollTop() == 0) {
    p = true;  
  }
});

var p = true;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
    if (p==true){
      document.getElementById("navbar").style.display = "block";
    }
  } else {
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("navbar").style.display = "none";
  }
}

function topFunction() {
  p=false;
  document.getElementById("navbar").style.display = "none";
	document.getElementById('top').scrollIntoView({
            behavior: 'smooth'
        });
}
