// Mobile menu
(function(){
  var b=document.querySelector('.burger'),l=document.querySelector('.nav-links');
  if(b&&l){b.addEventListener('click',function(){l.classList.toggle('open');});}
})();

// Scroll reveal
(function(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.14});
  els.forEach(function(e){io.observe(e);});
})();
