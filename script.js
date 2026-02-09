// Love Counter
const start = new Date('2025-07-06');
const now = new Date();
const days = Math.floor((now - start)/(1000*60*60*24));
document.getElementById('counter').innerText =
'Since the day we met: ' + days + ' days ❤️';

// Name typing
const text='Samira…';
let i=0;
function type(){
 if(i<text.length){
  document.getElementById('name').innerHTML+=text.charAt(i);
  i++; setTimeout(type,200);
 }
}
type();

// Gallery
const photos=document.querySelectorAll('.photo');
let current=0;
document.addEventListener('click',()=>{
 photos[current].classList.remove('active');
 current=(current+1)%photos.length;
 photos[current].classList.add('active');
});

// Choice celebration
function yes(){alert('You chose love ❤️');}
function always(){alert('Forever & Always 😌❤️');}

// Shake hearts
let lastX=0,lastY=0;
window.addEventListener('devicemotion',e=>{
 let a=e.accelerationIncludingGravity;
 if(Math.abs(a.x-lastX)>15||Math.abs(a.y-lastY)>15){
  const h=document.createElement('div');
  h.innerHTML='❤️';
  h.style.position='fixed';
  h.style.left=Math.random()*100+'%';
  h.style.top='100%';
  h.style.animation='float 2s linear';
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),2000);
 }
 lastX=a.x; lastY=a.y;
});

// Heart animation
const st=document.createElement('style');
st.innerHTML='@keyframes float{to{top:-10%;opacity:0}}';
document.head.appendChild(st);
