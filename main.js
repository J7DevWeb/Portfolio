// Menu
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display ='flex';
    mainMenu.style.top ='0';
}

function close(){
    mainMenu.style.display ='flex';
    mainMenu.style.top ='-100%';
}

//Rain
setInterval(rainFall, 42);

function rainFall() {
  const waterDrop = document.createElement('i');
  
	waterDrop.classList.add('fas');
	waterDrop.classList.add('fa-tint');
	waterDrop.style.left = Math.random() * window.innerWidth + 'px';
	waterDrop.style.animationDuration = Math.random() * 2 + 's';
	waterDrop.style.opacity = Math.random() + 0.3;
	waterDrop.style.fontSize = Math.random() * 14 +'px';
	
	document.body.appendChild(waterDrop);
	
	setTimeout(() => {
		waterDrop.remove();
	}, 10000)
};

//title

const title = document.querySelector('.title');
const strTitle = title.textContent;
const splitTitle = strTitle.split("");

title.textContent="";
for(let i=0; i<splitTitle.length; i++){
    title.innerHTML += "<span>" + splitTitle[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span = title.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char ===splitTitle.length){
        complete();
        return;
    }

}

function complete(){
    clearInterval(timer);
    timer =null;
}























